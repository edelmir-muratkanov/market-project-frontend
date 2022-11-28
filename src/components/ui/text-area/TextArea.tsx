import { forwardRef } from 'react'

import { ITextArea } from '@/ui/text-area/text-area.interface'

import styles from './TextArea.module.scss'

const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(
	({ error, labelName, style, ...rest }, ref) => {
		return (
			<label className={styles.editor} style={style}>
				{labelName}
				{error && <div className={styles.error}>*{error.message}</div>}
				<textarea ref={ref} {...rest} />
			</label>
		)
	}
)

TextArea.displayName = 'TextArea'

export default TextArea
