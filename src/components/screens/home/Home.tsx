import { FC } from 'react'
import { useQuery } from 'react-query'

import { IProduct } from '@/shared/interfaces/product.interface'

import { ProductService } from '@/services/product.service'

import Layout from '@/components/layout/Layout'

export const Home: FC = ({}) => {
	const { data } = useQuery<IProduct[]>('products', async () => {
		return (await ProductService.getAll()).data
	})

	return (
		<Layout isSidebar={true} title='Главная'>
			{data?.map(product => (
				<div key={product.id}>{product.title}</div>
			))}
		</Layout>
	)
}
