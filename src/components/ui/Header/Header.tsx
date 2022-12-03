import AccountIcon from '@mui/icons-material/AccountCircle'
import SearchIcon from '@mui/icons-material/Search'
import { AppBar, Box, Container, IconButton, Toolbar } from '@mui/material'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { Link } from '@/ui/Link'

import { useAuth } from '@/shared/hooks'

import { Button } from '../Button'

import { Search, SearchIconWrapper, StyledInputBase } from './Search'

export const Header: FC = ({}) => {
	const { user } = useAuth()
	const router = useRouter()

	const menuId = 'menu'

	return (
		<AppBar variant='outlined' color='transparent' position='sticky'>
			<Container maxWidth='lg'>
				<Toolbar disableGutters>
					<Link
						underline='none'
						color='black'
						href='/'
						variant='h4'
						fontWeight='bold'
					>
						MARKET
					</Link>
					<Search>
						<SearchIconWrapper>
							<SearchIcon />
						</SearchIconWrapper>
						<StyledInputBase
							placeholder='Поиск...'
							inputProps={{ 'aria-label': 'search' }}
						/>
					</Search>
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
