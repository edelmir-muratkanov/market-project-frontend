import { IProduct } from '@/shared/interfaces/product.interface'

import { axiosClassic } from '../api/axios'

export const PRODUCT = 'product'

export const ProductService = {
	async getAll() {
		return axiosClassic.get<IProduct[]>(`/${PRODUCT}`)
	},

	async get(id: number) {
		return axiosClassic.get<IProduct>(`/${PRODUCT}/${id}`)
	}
}
