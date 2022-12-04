import { NextPage } from 'next'

import { Auth } from '@/screens/Auth'

import { Meta } from '@/utils/meta/Meta'

const SignInPage: NextPage = () => {
	return (
		<>
			<Meta title='Авторизация' />
			<Auth type='login' />
		</>
	)
}

export default SignInPage
