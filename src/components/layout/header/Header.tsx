import { FC } from 'react'

import styles from './Header.module.scss'
import { Logo } from './Logo'
import { Profile } from './profile/Profile'
import { Search } from './search/Search'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Search />
			<Profile />
		</header>
	)
}
