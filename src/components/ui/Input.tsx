import { TextField, TextFieldProps } from '@mui/material'
import { forwardRef } from 'react'

export const Input = forwardRef<HTMLInputElement, TextFieldProps>(
	(props, ref) => {
		return (
			<TextField
				variant='outlined'
				margin='normal'
				inputRef={ref}
				fullWidth
				{...props}
			/>
		)
	}
)
