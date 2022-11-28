import Image from 'next/image'
import { FC } from 'react'

import { IUser } from '@/shared/interfaces/user.interface'

import styles from './Profile.module.scss'

export const Info: FC<IUser> = ({ name, email, avatarPath }) => {
	return (
		<div className={styles.info}>
			<Image src={avatarPath} alt='avatar' />
			<div>
				{name && <h1>{name}</h1>}
				<div>{email}</div>
			</div>
		</div>
	)
}
