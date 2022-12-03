import { Container } from '@mui/material'
import { FC } from 'react'

import { Header } from '@/ui/header/Header'
import { Subheader } from '@/ui/header/Subheader'

export const Home: FC = ({}) => {
	return (
		<>
			<Header />
			<Subheader />
			<Container maxWidth='lg'></Container>
		</>
	)
}
