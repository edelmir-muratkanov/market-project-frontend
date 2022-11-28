import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { IAuthFields, validEmail } from '@/screens/auth/auth-form.interface'

import { Button } from '@/ui/button/Button'
import Field from '@/ui/field/Field'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './AuthForm.module.scss'

export const AuthForm: FC<{ type: 'login' | 'register' }> = ({ type }) => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({ mode: 'onChange' })

	const router = useRouter()
	const { login, register: registerAction } = useActions()
	const { user } = useAuth()
	const { isLoading } = useAuth()

	useEffect(() => {
		if (user) router.push('/')
	})

	const onSubmit: SubmitHandler<IAuthFields> = data => {
		if (type === 'login') {
			login(data)
		} else if (type === 'register') {
			registerAction(data)
		}
	}

	return (
		<div className={styles.form}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email', {
						required: 'Обязательное поле',
						pattern: {
							value: validEmail,
							message: 'Введите корректную почту'
						}
					})}
					labelName='Электронная почта'
					error={errors.email}
				/>
				<Field
					{...register('password', {
						required: 'Обязательное поле',
						minLength: {
							value: 6,
							message: 'Минимальная длина пароля должна быть 6 символов'
						}
					})}
					labelName='Пароль'
					type='password'
					error={errors.password}
				/>
				<Button disabled={isLoading} className={styles.button}>
					{type === 'login' ? 'Войти' : 'Зарегестрироваться'}
				</Button>
				<span>
					{type === 'login'
						? 'Еще не зарегестрированы? '
						: 'Уже есть аккаунт? '}
					<Link href={type === 'login' ? '/sign-up' : 'sign-in'}>
						{type === 'login' ? 'Создать аккаунт' : 'Войти'}
					</Link>
				</span>
			</form>
		</div>
	)
}
