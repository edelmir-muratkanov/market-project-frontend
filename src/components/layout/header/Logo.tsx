import Link from 'next/link'
import { FC } from 'react'

import styles from './Header.module.scss'

export const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<Link href='/'>Market</Link>
		</div>
	)
}
