import AccountIcon from '@mui/icons-material/AccountCircle'
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { useAuth } from '@/shared/hooks'

import { Button } from '../Button'

import { Logo } from './Logo'
import { Search } from './search/Search'
import { useSearch } from './search/useSearch'

export const Header: FC = ({}) => {
	const { user } = useAuth()
	const { searchTerm, handleSearch, isSuccess, data } = useSearch()
	const router = useRouter()

	const menuId = 'menu'

	return (
		<AppBar
			variant='outlined'
			elevation={0}
			color='transparent'
			position='sticky'
		>
			<Container maxWidth='lg'>
				<Toolbar disableGutters>
					<Logo />
					<Search />
					{!user ? (
						<Box>
							<Button variant='outlined' href='/sign-in'>
								Авторизоваться
							</Button>
						</Box>
					) : (
						<Box
							gap={3}
							sx={{
								display: {
									xs: 'none',
									md: 'flex'
								},
								alignItems: 'center'
							}}
						>
							<Button
								sx={{
									whiteSpace: 'nowrap',
									height: '3rem'
								}}
								size='small'
								variant='outlined'
								onClick={() => router.push('/p/new')}
							>
								Подать заявление
							</Button>
							<IconButton
								size='large'
								edge='end'
								aria-label='profile'
								aria-controls={menuId}
								aria-haspopup
								onClick={() => router.push('/u')}
							>
								<AccountIcon fontSize='large' />
							</IconButton>
						</Box>
					)}
				</Toolbar>
			</Container>
		</AppBar>
	)
}
