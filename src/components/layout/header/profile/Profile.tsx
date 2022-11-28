import Link from 'next/link'
import { FC, useEffect } from 'react'
import { FaRegUser as ProfileIcon } from 'react-icons/fa'

import { Button } from '@/ui/button/Button'

import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'

import styles from './Profile.module.scss'
import { ProfileMenu } from './ProfileMenu'

export const Profile: FC = ({}) => {
	const { ref, isShow, setIsShow } = useOutside(false)
	const { user } = useAuth()

	useEffect(() => {
		if (!user) setIsShow(false)
	}, [user, setIsShow])

	return (
		// @ts-ignore
		<div className={styles.wrapper} ref={ref}>
			<div>
				{!user ? (
					<Button>
						<Link href='/sign-in'>Войти</Link>
					</Button>
				) : (
					<Button onClick={() => setIsShow(!isShow)} className='flex'>
						<ProfileIcon size={24} />
						<span>Мой профиль</span>
					</Button>
				)}
				{isShow && <ProfileMenu />}
			</div>
		</div>
	)
}
