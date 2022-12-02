import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IUser } from '@/shared/interfaces/user.interface'

import { USER } from '@/services/user.service'

import { API_URL } from '@/utils/api/axios.api'

import { TypeRootState } from '@/store/store'

export const rootApi = createApi({
	reducerPath: 'rootApi',
	tagTypes: ['Profile', 'Product'],

	baseQuery: fetchBaseQuery({
		baseUrl: API_URL,
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken

			if (token) headers.set('Authorization', `Bearer ${token}`)
			return headers
		}
	}),

	endpoints: builder => ({
		getProfile: builder.query<IUser, any>({
			query: () => ({ url: `${USER}/me` }),
			providesTags: (result, error) => [{ type: 'Profile' }]
		}),

		changeProfile: builder.mutation<IUser, null>({
			query: user => ({
				url: `/${USER}/me`,
				method: 'PUT'
			}),
			invalidatesTags: () => [{ type: 'Profile' }]
		})
	})
})
