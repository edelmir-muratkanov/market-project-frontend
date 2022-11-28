import { forwardRef } from 'react'

import { IField } from '@/ui/field/field.interface'

import { useOutside } from '@/hooks/useOutside'

import styles from './CategoryList.module.scss'

export const CategoryList = forwardRef<HTMLInputElement, IField>(
	({ labelName, error, ...rest }, ref) => {
		const { ref: modalRef, setIsShow, isShow } = useOutside(false)

		return (
			// @ts-ignore
			<div ref={modalRef} className={styles.wrapper}>
				<label>
					{labelName}
					{error && <div className={styles.error}>{error.message}</div>}
					<input hidden ref={ref} {...rest} />
					<button className={styles.button} onClick={() => setIsShow(true)}>
						Выбрать категорию
					</button>
				</label>

				{isShow && (
					<>
						<div className={styles.cover} onClick={() => setIsShow(false)} />
						<div></div>
					</>
				)}
			</div>
		)
	}
)
