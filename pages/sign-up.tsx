import { NextPage } from 'next'

import { Auth } from '@/screens/Auth'

import { Meta } from '@/utils/meta/Meta'

const SignUpPage: NextPage = () => {
	return (
		<>
			<Meta title='Регистрация' />
			<Auth type='register' />
		</>
	)
}

export default SignUpPage
