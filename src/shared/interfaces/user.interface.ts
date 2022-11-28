import { IBase } from '@/shared/interfaces/base.interface'
import { IProduct } from '@/shared/interfaces/product.interface'

export interface IUser extends IBase {
	name: string
	email: string
	avatarPath: string
	isVerified?: boolean
	products?: IProduct[]
}
