import { NextPage } from 'next'

import { AuthForm } from '@/screens/auth/AuthForm'

import { Meta } from '@/utils/Meta/Meta'

const SignInPage: NextPage = () => {
	return (
		<>
			<Meta title='Авторизация' />
			<AuthForm type='login' />
		</>
	)
}

export default SignInPage
