import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Container, Link, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'

import { Button } from '@/ui/Button'
import { Form } from '@/ui/Form'
import { Input } from '@/ui/Input'

import { useActions, useAuth } from '@/shared/hooks'
import { IAuthFields } from '@/shared/interfaces/auth.interface'

const schema = yup.object().shape({
	email: yup.string().email('Некорректная почта').required('Обязательное поле'),
	password: yup
		.string()
		.min(6, 'Минимальная длина пароля 6 символов')
		.required('Обязательное поле')
})

export const Auth: FC<{ type: 'login' | 'register' }> = ({ type }) => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<IAuthFields>({
		mode: 'onBlur',
		resolver: yupResolver(schema)
	})

	const router = useRouter()
	const { register: registerAction, login } = useActions()
	const { user, isLoading } = useAuth()

	useEffect(() => {
		if (user) router.push('/')
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type == 'login') login(data)
		else if (type == 'register') registerAction(data)
		console.log(data)
	}

	return (
		<Container
			maxWidth='sm'
			sx={{
				paddingTop: '12rem',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center'
			}}
		>
			<Typography component='h1' variant='h5'>
				Войти
			</Typography>

			<Form onSubmit={handleSubmit(onSubmit)}>
				<Input
					id='email'
					label='Email'
					type='text'
					autoComplete='email'
					autoFocus
					{...register('email')}
					error={!!errors.email}
					helperText={errors?.email?.message}
				/>
				<Input
					sx={{
						borderRadius: '12px'
					}}
					id='password'
					label='Password'
					type='password'
					autoComplete='current-password'
					{...register('password')}
					error={!!errors.password}
					helperText={errors?.password?.message}
				/>
				<Button type='submit' disabled={isLoading}>
					{type === 'login' ? 'Войти' : 'Зарегестрироваться'}
				</Button>
				<Box display='flex' justifyContent='center' marginY={1} gap={1}>
					<Typography component={'span'} variant='body2'>
						{type === 'login'
							? 'Еще не зарегестрированы?'
							: 'Уже есть аккаунт?'}
					</Typography>
					<Link
						textAlign='center'
						underline='hover'
						variant='body2'
						href={type === 'login' ? '/sign-up' : '/sign-in'}
					>
						{type === 'login' ? 'Создать аккаунт' : 'Войти'}
					</Link>
				</Box>
			</Form>
		</Container>
	)
}
