import { configureStore } from '@reduxjs/toolkit'
import {
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
	persistReducer,
	persistStore
} from 'redux-persist'
// @ts-ignore
import storage from 'redux-persist/lib/storage'

import { rootApi } from '@/store/api/root.api'
import { rtkQueryErrorLogger } from '@/store/middleware/error.middleware'
import { rootReducer } from '@/store/root.reducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['auth']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE]
			}
		})
			.concat(rtkQueryErrorLogger)
			.concat(rootApi.middleware)
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
