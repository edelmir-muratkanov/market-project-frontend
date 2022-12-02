import { FC, HTMLAttributes, PropsWithChildren } from 'react'

export const Form: FC<PropsWithChildren<HTMLAttributes<HTMLFormElement>>> = ({
	children,
	...props
}) => {
	return (
		<form
			style={{
				width: '100%',
				marginTop: '0.25rem'
			}}
			noValidate
			{...props}
		>
			{children}
		</form>
	)
}
