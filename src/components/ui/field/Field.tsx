import { forwardRef } from 'react'

import { IField } from '@/ui/field/field.interface'

import styles from './Field.module.scss'

const Field = forwardRef<HTMLInputElement, IField>((props, ref) => {
	const { error, labelName, type = 'text', style, ...rest } = props
	return (
		<div className={styles.input} style={style}>
			<label>
				{labelName}
				{error && <div className={styles.error}>*{error.message}</div>}
				<input ref={ref} type={type} {...rest} />
			</label>
		</div>
	)
})

Field.displayName = 'Field'

export default Field
