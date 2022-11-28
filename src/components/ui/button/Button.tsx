import cn from 'classnames'
import { FC, PropsWithChildren } from 'react'

import { IButton } from '@/ui/button/button.interface'

import styles from './Button.module.scss'

export const Button: FC<PropsWithChildren<IButton>> = ({
	children,
	className,
	...rest
}) => {
	return (
		<button className={cn(className, styles.button)} {...rest}>
			{children}
		</button>
	)
}
