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

export interface IProductDto
	extends Pick<
		IProduct,
		'id' | 'title' | 'description' | 'isPublished' | 'images'
	> {}
