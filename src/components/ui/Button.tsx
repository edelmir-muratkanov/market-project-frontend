import { ButtonProps, Button as MuiButton } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	...rest
}) => {
	return (
		<MuiButton
			sx={{
				margin: '10px 0 8px 0',
				height: '50px'
			}}
			variant='contained'
			color='primary'
			fullWidth
			{...rest}
		>
			{children}
		</MuiButton>
	)
}
