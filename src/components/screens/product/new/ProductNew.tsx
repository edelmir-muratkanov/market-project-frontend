import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Container, Paper, Stack, Typography } from '@mui/material'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { CategorySelect } from '@/screens/product/new/CategorySelect'
import { PriceSelect } from '@/screens/product/new/PriceSelect'

import { Button } from '@/ui/Button'
import { Form } from '@/ui/Form'
import { Input } from '@/ui/Input'
import { Logo } from '@/ui/header/Logo'

import { IProductFields } from '@/shared/interfaces/product.interface'

const schema = yup.object().shape({
	title: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(5, 'Минимум 5 символов'),
	description: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(20, 'Минимум 20 символов')
		.max(500, 'Максимум 500 символов'),
	address: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.max(70, 'Максимум 70 знаков'),
	phone: yup.string().trim().required('Обязательное поле'),
	price: yup
		.string()
		.trim()
		.min(1, 'Обязательное поле')
		.required('Обязательное поле'),
	category: yup.object({
		id: yup.number().min(1, 'Выберите категорию').required('Обязательное поле')
	}),
	images: yup.array()
})

export const ProductNew: FC = ({}) => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<IProductFields>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const normalizePhoneNumber = (value: string) => {
		const phoneNumber = parsePhoneNumberFromString(value)
		if (!phoneNumber) return value

		return phoneNumber.formatInternational()
	}
	console.log(errors)

	const onSubmit: SubmitHandler<IProductFields> = data => {
		console.log(data)
	}

	return (
		<Container
			maxWidth='lg'
			sx={{
				paddingTop: '2rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'start'
			}}
		>
			<Box width='100%'>
				<Logo />
				<Typography component='h1' variant='h4'>
					Подать объявление бесплатно
				</Typography>
			</Box>
			<Box marginTop='3rem' width='40rem'>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<Paper elevation={2} sx={{ padding: 2, width: '100%' }}>
						<Stack spacing={4} alignItems='baseline'>
							<Input
								id='title'
								label='Заголовок'
								type='text'
								error={!!errors.title}
								helperText={errors?.title?.message}
								{...register('title')}
								required
							/>

							<PriceSelect
								controlForm={control}
								error={!!errors.price}
								helpText={errors?.price?.message}
							/>
							<CategorySelect
								error={!!errors.category?.id}
								helpText={errors?.category?.id?.message}
								control={control}
								setValue={setValue}
							/>

							<Button type='submit'>Создать</Button>
						</Stack>
					</Paper>
				</Form>
			</Box>
		</Container>
	)
}
