import Link from 'next/link'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import styles from './Profile.module.scss'

export const ProfileMenu: FC = ({}) => {
	const { logout } = useActions()
	return (
		<div className={styles.menu}>
			<Link href='/profile'>Мои объявления</Link>
			<Link href='/product/new'>Подать объявление</Link>
			<a onClick={() => logout()}>Выйти</a>
		</div>
	)
}
