import { ChangeEvent, forwardRef, useState } from 'react'

import styles from './Price.module.scss'
import { IField } from './price.interface'

const Price = forwardRef<HTMLInputElement, IField>(({ error }, ref) => {
	const [value, setValue] = useState('')

	const [checked, setChecked] = useState<'free' | 'trade' | 'price' | ''>('')

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value.toString())
	}

	return (
		<div className={styles.wrapper}>
			{error && <div className={styles.error}>{error.message}</div>}
			<label className={styles.label}>
				<input ref={ref} type='hidden' value={value} />
				Цена
				<label className={styles.option} onClick={() => setChecked('price')}>
					<input type='checkbox' checked={checked === 'price'} readOnly />
					<input
						type='number'
						className={styles.numberInput}
						onChange={onChange}
						placeholder='Цена в тенге'
					/>
				</label>
				<label
					onClick={() => {
						setChecked('trade')
						setValue('Договорная')
					}}
					className={styles.option}
				>
					<input type='checkbox' checked={checked === 'trade'} readOnly />
					Договорная
				</label>
				<label
					onClick={() => {
						setChecked('free')
						setValue('Отдам даром')
					}}
					className={styles.option}
				>
					<input type='checkbox' checked={checked === 'free'} readOnly />
					Отдам даром
				</label>
			</label>
		</div>
	)
})

Price.displayName = 'Price'

export default Price
