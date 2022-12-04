import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { IUser } from '@/shared/interfaces'

import { USER } from '@/services/index'

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
		getProfile: builder.query<IUser, { id: number }>({
			query: id => ({
				url: `${USER}/${id}`
			}),
			providesTags: (result, error, arg) => [{ type: 'Profile', id: arg.id }]
		}),

		getPrivateProfile: builder.query<IUser, any>({
			query: () => ({ url: `${USER}/me` }),
			providesTags: () => [{ type: 'Profile' }]
		}),

		changeProfile: builder.mutation<IUser, IUser>({
			query: body => ({
				url: `/${USER}/me`,
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, arg) => [{ type: 'Profile', id: arg.id }]
		})
	})
})
