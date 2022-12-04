import { yupResolver } from '@hookform/resolvers/yup'
import {
	Box,
	CircularProgress,
	Container,
	Paper,
	Stack,
	Typography
} from '@mui/material'
import { ChangeEvent, FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toastr } from 'react-redux-toastr'

import { Button, FileInput, Form, Input, Logo } from '@/ui/index'

import { IProductFields } from '@/shared/interfaces'

import { normalizePhoneNumber } from '@/utils/phone.utils'

import { productApi } from '@/store/api'

import { CategorySelect } from './CategorySelect'
import { PriceSelect } from './PriceSelect'
import { schema } from './product-new.validation'

export const ProductNew: FC = ({}) => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors }
	} = useForm<IProductFields>({
		mode: 'onChange',
		resolver: yupResolver(schema)
	})

	const [createVideo, { isLoading, isSuccess }] =
		productApi.useCreateProductMutation()

	useEffect(() => {
		if (isSuccess) {
			toastr.success('Успешно', 'Вы успешно добавили объявление')
			reset({
				title: '',
				address: '',
				description: '',
				category: {
					id: 0
				},
				price: 'Договорная',
				phone: '',
				images: []
			})
		}
	}, [isSuccess])

	const onSubmit: SubmitHandler<IProductFields> = data => {
		createVideo(data)
	}

	if (isLoading) return <CircularProgress />

	return (
		<Container
			maxWidth='md'
			sx={{
				paddingY: '2rem',
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
			<Box marginTop='3rem' width='100%'>
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

							<Input
								id='description'
								type='text'
								label='Описание'
								error={!!errors.description}
								helperText={errors?.description?.message}
								{...register('description')}
								rows={4}
								multiline
								required
							/>

							<Input
								id='phone'
								type='tel'
								label='Телефон'
								error={!!errors.phone}
								helperText={errors?.phone?.message}
								placeholder='(700) 000 0000'
								{...register('phone')}
								onChange={(event: ChangeEvent<HTMLInputElement>) => {
									event.target.value = normalizePhoneNumber(event.target.value)
								}}
								required
							/>

							<Input
								label='Адрес'
								error={!!errors.address}
								helperText={errors?.address?.message}
								placeholder='Введите адрес'
								{...register('address')}
								required
							/>

							<PriceSelect
								controlForm={control}
								error={!!errors.price}
								helpText={errors?.price?.message}
								setValue={setValue}
							/>

							<CategorySelect
								error={!!errors.category?.id}
								helpText={errors?.category?.id?.message}
								control={control}
								setValue={setValue}
							/>

							<FileInput control={control} />

							<Button type='submit'>Создать</Button>
						</Stack>
					</Paper>
				</Form>
			</Box>
		</Container>
	)
}
