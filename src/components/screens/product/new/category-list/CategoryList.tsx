import { forwardRef, useState } from 'react'
import { useQuery } from 'react-query'

import { CategoryColumn } from '@/screens/product/new/category-list/CategoryColumn'

import { IField } from '@/ui/field/field.interface'

import { useOutside } from '@/hooks/useOutside'

import { ICategory } from '@/shared/interfaces/category.interface'

import { CategoryService } from '@/services/category.service'

import styles from './CategoryList.module.scss'

export const CategoryList = forwardRef<HTMLInputElement, IField>(
	({ labelName, error, ...rest }, ref) => {
		const { ref: modalRef, setIsShow, isShow } = useOutside(false)
		const { data } = useQuery<ICategory[]>('category list', () =>
			CategoryService.getAll()
		)

		const [rootCategory, setRootCategory] = useState<ICategory>({} as ICategory)
		const [subCategory, setSubCategory] = useState<ICategory>({} as ICategory)
		const [category, setCategory] = useState<ICategory>({} as ICategory)

		return (
			// @ts-ignore
			<div ref={modalRef} className={styles.wrapper}>
				<div className={styles.label} onClick={() => setIsShow(true)}>
					{error && <div className={styles.error}>*{error.message}</div>}
					<input
						value={category.id ? category.id : 0}
						hidden
						ref={ref}
						{...rest}
					/>

					{category.id && (
						<div>
							Выбрано: <span>{category.name}</span>
						</div>
					)}
				</div>
				<button
					className={styles.button}
					onClick={(e: any) => {
						e.preventDefault()
						setIsShow(true)
					}}
				>
					{category.id ? 'Выбрать другую категорию' : 'Выбрать категорию'}
				</button>

				{isShow && (
					<>
						<div className={styles.cover} onClick={() => setIsShow(false)} />
						<div className={styles.content}>
							{data && (
								<CategoryColumn
									category={data[0]}
									active={rootCategory}
									setChild={(cat: ICategory) => {
										setRootCategory(cat)
										setSubCategory({} as ICategory)
										setCategory({} as ICategory)
									}}
								/>
							)}
							{rootCategory && (
								<CategoryColumn
									category={rootCategory}
									setChild={(cat: ICategory) => {
										setSubCategory(cat)
										setCategory({} as ICategory)
									}}
									active={subCategory}
								/>
							)}
							{subCategory && (
								<CategoryColumn
									category={subCategory}
									setChild={(cat: ICategory) => {
										setCategory(cat)
										setIsShow(false)
									}}
								/>
							)}
						</div>
					</>
				)}
			</div>
		)
	}
)
