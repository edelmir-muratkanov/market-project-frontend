import cn from 'classnames'
import { FC } from 'react'
import { FaArrowRight } from 'react-icons/fa'

import { ICategory } from '@/shared/interfaces/category.interface'

import styles from './CategoryList.module.scss'

export const CategoryColumn: FC<{
	category: ICategory
	active?: ICategory
	setChild: (item: ICategory) => void
}> = ({ setChild, category, active }) => {
	return (
		<ul className={styles.col}>
			{category.children?.map(item => (
				<li
					key={item.id}
					onClick={() => setChild(item)}
					className={cn(styles.item, active == item && styles.active)}
				>
					{item.name}
					{!!item.children?.length && <FaArrowRight size={12} />}
				</li>
			))}
		</ul>
	)
}
