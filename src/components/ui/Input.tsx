import { TextField, TextFieldProps } from '@mui/material'
import { InputHTMLAttributes, forwardRef } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement>

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
