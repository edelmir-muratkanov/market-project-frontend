import { NextPage } from 'next'

import { AuthForm } from '@/screens/auth/AuthForm'

import { Meta } from '@/utils/Meta/Meta'

const SignUpPage: NextPage = () => {
	return (
		<>
			<Meta title='Регистрация' />
			<AuthForm type='register' />
		</>
	)
}

export default SignUpPage
