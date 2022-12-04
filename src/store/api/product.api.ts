import { IProduct, IProductFields } from '@/shared/interfaces'

import { PRODUCT } from '@/services/index'

import { rootApi } from './root.api'

export const productApi = rootApi.injectEndpoints({
	endpoints: build => ({
		getProductBySearchTerm: build.query<IProduct[], string>({
			query: searchTerm => ({ url: `/${PRODUCT}`, params: { searchTerm } })
		}),

		getProductById: build.query<IProduct, number>({
			query: id => `/${PRODUCT}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Product', id }]
		}),

		createProduct: build.mutation<IProduct, IProductFields>({
			query: body => ({
				url: `/${PRODUCT}`,
				method: 'POST',
				body
			}),
			invalidatesTags: () => [{ type: 'Product' }]
		}),

		updateProduct: build.mutation<IProduct, IProductFields & { id: number }>({
			query: ({ id, ...body }) => ({
				url: `/${PRODUCT}/${id}`,
				method: 'PUT',
				body
			}),
			invalidatesTags: (result, error, { id: productId }) => [
				{ type: 'Product', id: productId },
				{ type: 'Profile' }
			]
		}),

		deleteProduct: build.mutation<void, number>({
			query: id => ({ url: `/${PRODUCT}/${id}`, method: 'DELETE' }),
			invalidatesTags: () => [{ type: 'Product' }, { type: 'Profile' }]
		})
	})
})
