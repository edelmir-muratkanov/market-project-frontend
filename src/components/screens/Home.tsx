import { Container } from '@mui/material'
import { FC } from 'react'

import { Header, Subheader } from '@/ui/index'

export const Home: FC = ({}) => {
	return (
		<>
			<Header />
			<Subheader />
			<Container maxWidth='lg'></Container>
		</>
	)
}
