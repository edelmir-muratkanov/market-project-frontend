import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { rootApi } from '@/store/api'

import { authSlice } from './auth/auth.slices'

export const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
	auth: authSlice.reducer,
	// toast must be last
	toastr: toastrReducer
})
