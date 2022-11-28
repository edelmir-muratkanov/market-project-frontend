import { IProduct, IProductDto } from '@/shared/interfaces/product.interface'

import { PRODUCT } from '@/services/product.service'

import { api } from '@/store/api/api'

export const productApi = api.injectEndpoints({
	endpoints: build => ({
		getProductBySearchTerm: build.query<IProduct[], string>({
			query: searchTerm => ({ url: `/${PRODUCT}`, params: { searchTerm } })
		}),

		getProduct: build.query<IProduct, number>({
			query: id => `${PRODUCT}/${id}`,
			providesTags: (result, error, id) => [{ type: 'Product', id }]
		}),

		createProduct: build.mutation<string, void>({
			query: () => ({
				url: `/${PRODUCT}`,
				method: 'POST'
			}),
			invalidatesTags: () => [{ type: 'Product' }]
		}),

		updateProduct: build.mutation<IProduct, IProductDto>({
			query: ({ id, ...body }) => ({
				url: `/${PRODUCT}/${id}`,
				method: 'POST',
				body
			}),
			invalidatesTags: (result, error, { id }) => [
				{ type: 'Product', id },
				{ type: 'Profile' }
			]
		}),

		deleteProduct: build.mutation<void, number>({
			query: id => ({ url: `/${PRODUCT}/${id}`, method: 'DELETE' }),
			invalidatesTags: () => [{ type: 'Product' }, { type: 'Profile' }]
		})
	})
})
