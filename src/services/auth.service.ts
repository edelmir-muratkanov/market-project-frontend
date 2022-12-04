import { IAuthData } from '@/shared/interfaces'

import { axiosClassic } from '@/utils/api/axios.api'

const AUTH = 'auth'

export const AuthService = {
	async login(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`/${AUTH}/login`, {
			email,
			password
		})
		return response.data
	},

	async register(email: string, password: string) {
		const response = await axiosClassic.post<IAuthData>(`/${AUTH}/register`, {
			email,
			password
		})
		return response.data
	}
}
