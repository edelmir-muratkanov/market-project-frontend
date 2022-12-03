import { Container } from '@mui/material'
import { FC } from 'react'

import { Header } from '@/ui/Header/Header'
import { Subheader } from '@/ui/Header/Subheader'

export const Home: FC = ({}) => {
	return (
		<>
			<Header />
			<Subheader />
			<Container maxWidth='lg'></Container>
		</>
	)
}
