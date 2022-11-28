import { IBase } from '@/shared/interfaces/base.interface'
import { IProduct } from '@/shared/interfaces/product.interface'

export interface ICategoryOption extends IBase {
	name: string
	choices: string[]
	category: ICategory
}

export interface ICategory extends IBase {
	name: string
	products: IProduct[]
	parent?: ICategory
	children?: ICategory[]
	options?: ICategoryOption[]
}

export interface ICategoryDto extends Pick<ICategory, 'name' | 'options'> {
	parentId: number
}
