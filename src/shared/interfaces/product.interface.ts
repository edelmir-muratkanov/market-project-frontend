import { IBase } from '@/shared/interfaces/base.interface'
import { ICategory } from '@/shared/interfaces/category.interface'
import { IUser } from '@/shared/interfaces/user.interface'

export interface IProduct extends IBase {
	title: string
	price: string
	description: string
	phone: string
	images: string[]
	address: string
	isPublished: boolean
	user: IUser
	category: ICategory
}

export interface IProductFields {
	title: string
	price: string
	description: string
	phone: string
	address: string
	category: {
		id: number
	}
	images?: File[]
}
