import { reducer as toastrReducer } from 'react-redux-toastr'
import { combineReducers } from 'redux'

import { rootApi } from '@/store/api/root.api'
import { authSlice } from '@/store/auth/auth.slices'

export const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
	auth: authSlice.reducer,
	// toast must be last
	toastr: toastrReducer
})
