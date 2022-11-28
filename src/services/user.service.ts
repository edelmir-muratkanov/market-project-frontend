import { IUser } from '@/shared/interfaces/user.interface'

import { axiosClassic } from '../api/axios'

export const USER = 'user'

export const UserService = {
	async get(id: number) {
		return axiosClassic.get<IUser>(`/${USER}/${id}`)
	}
}
