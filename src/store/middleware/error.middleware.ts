import { isRejectedWithValue } from '@reduxjs/toolkit'
import { Middleware, MiddlewareAPI } from 'redux'

import { toastrError } from '@/utils/api.utils'

export const rtkQueryErrorLogger: Middleware =
	(api: MiddlewareAPI) => next => action => {
		if (isRejectedWithValue(action)) {
			toastrError(action.error, 'RTK error')
		}

		return next(action)
	}
