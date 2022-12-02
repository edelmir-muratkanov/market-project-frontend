import { ICategory } from '@/shared/interfaces/category.interface'

import { axiosClassic } from '@/utils/api/axios.api'

export const CATEGORY = 'category'

export const CategoryService = {
	async get(id?: number) {
		const response = await axiosClassic.get<ICategory>(`/${CATEGORY}/${id}`)
		return response.data
	},

	async getAll() {
		const response = await axiosClassic.get<ICategory[]>(`/${CATEGORY}/`)
		return response.data
	}
}
