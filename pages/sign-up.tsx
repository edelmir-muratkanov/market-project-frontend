import { NextPage } from 'next'

import { Auth } from '@/screens/Auth'

import { Meta } from '@/utils/Meta/Meta'

const SignUpPage: NextPage = () => {
	return (
		<>
			<Meta title='Регистрация' />
			<Auth type='register' />
		</>
	)
}

export default SignUpPage
