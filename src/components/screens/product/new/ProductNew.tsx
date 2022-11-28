import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { CategoryList } from '@/screens/product/new/category-list/CategoryList'
import { IProductFields } from '@/screens/product/new/product-new.interface'

import { Button } from '@/ui/button/Button'
import Field from '@/ui/field/Field'
import TextArea from '@/ui/text-area/TextArea'

import styles from './ProductNew.module.scss'
import Layout from '@/components/layout/Layout'

export const ProductNew: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IProductFields>({
		mode: 'onChange'
	})

	const onSubmit: SubmitHandler<IProductFields> = data => {
		console.log(data)
	}

	return (
		<Layout isSidebar={false} title='Подать объявление'>
			<div className={styles.wrapper}>
				<h1>Подать объявление бесплатно</h1>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('title', {
							required: 'Обязательное поле',
							minLength: { value: 5, message: 'Минимум 5 символов' },
							maxLength: { value: 75, message: 'Максимум 75 символов' }
						})}
						labelName='Заголовок'
						error={errors.title}
					/>

					<TextArea
						{...register('description', {
							required: 'Обязательное поле',
							minLength: { value: 20, message: 'Минимум 20 символов' }
						})}
						labelName='Описание'
						error={errors.description}
					/>
					<CategoryList
						{...register('category.id', {
							min: 1
						})}
						labelName='Выберите категорию'
					/>

					<Button className={styles.button}>Подать объявление</Button>
				</form>
			</div>
		</Layout>
	)
}
