import { Container, List, ListItemButton } from '@mui/material'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { useQuery } from 'react-query'

import { ICategory } from '@/shared/interfaces'

import { CategoryService } from '@/services/index'

export const Subheader: FC<{ id?: number }> = ({ id }) => {
	const { data } = useQuery<ICategory[] | ICategory>('categories', async () => {
		return await CategoryService.get(id)
	})

	const [categories, setCategories] = useState<ICategory[] | undefined>([])

	useEffect(() => {
		if (Array.isArray(data)) setCategories(data)
		else setCategories(data?.children)
	}, [data])

	return (
		<Container fixed>
			<List
				sx={{
					display: 'flex',
					flexWrap: 'wrap'
				}}
			>
				{categories &&
					categories.map(category => (
						<ListItemButton
							key={category.name}
							sx={{
								justifyContent: 'center',
								whiteSpace: 'nowrap'
							}}
							component={Link}
							href={`/category/${category.id}`}
						>
							{category.name}
						</ListItemButton>
					))}
			</List>
		</Container>
	)
}
