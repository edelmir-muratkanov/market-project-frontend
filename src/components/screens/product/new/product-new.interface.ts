export interface IProductFields {
	title: string
	price: string
	description: string
	category: {
		id: number
	}
	phone: string
	address: string
	images?: string[]
}
