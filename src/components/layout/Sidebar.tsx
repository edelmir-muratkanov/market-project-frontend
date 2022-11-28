import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { FaArrowLeft } from 'react-icons/fa'

import { Button } from '@/ui/button/Button'

import { ICategory } from '@/shared/interfaces/category.interface'

import styles from './Layout.module.scss'

export const Sidebar: FC<{ categories?: ICategory[]; parent?: ICategory }> = ({
	categories,
	parent
}) => {
	const { push } = useRouter()
	return (
		<div className={styles.sidebar}>
			{parent && (
				<Button
					className={styles.back}
					onClick={() => push(`/category/${parent.id}`)}
				>
					<FaArrowLeft size={17} />
					<span>{parent.name === 'root' ? 'начало' : parent.name}</span>
				</Button>
			)}
			{categories?.map(category => (
				<Link key={category.id} href={`/category/${category.id}`}>
					<span>{category.name}</span>
				</Link>
			))}
		</div>
	)
}
