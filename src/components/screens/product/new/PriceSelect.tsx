import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup
} from '@mui/material'
import { ChangeEvent, FC, useRef } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'

import { Input } from '@/ui/Input'

import { IProductFields } from '@/shared/interfaces'

const TRADE = 'Договорная'
const FREE = 'Даром'

export const PriceSelect: FC<{
	controlForm: Control<IProductFields, any>
	error: boolean
	helpText?: string
	setValue: UseFormSetValue<IProductFields>
}> = ({ controlForm, error, helpText, setValue }) => {
	const ref = useRef<HTMLInputElement>()

	return (
		<FormControl error={error} aria-errormessage={helpText}>
			<FormLabel>Цена</FormLabel>
			<Controller
				rules={{ required: true }}
				name='price'
				defaultValue={TRADE}
				control={controlForm}
				render={({ field: { onChange, value } }) => (
					<>
						<input type='hidden' value={value} onChange={onChange} />
						<RadioGroup>
							<FormControlLabel
								checked={value == TRADE}
								value={TRADE}
								control={<Radio onClick={() => setValue('price', TRADE)} />}
								label={TRADE}
							/>
							<FormControlLabel
								checked={value == FREE}
								onChange={onChange}
								value={FREE}
								control={<Radio onClick={() => setValue('price', FREE)} />}
								label={FREE}
							/>
							<FormControlLabel
								checked={value != TRADE && value != FREE}
								control={
									<Radio
										onClick={() => setValue('price', ref?.current?.value!)}
									/>
								}
								label={
									<Input
										required
										placeholder='Цена в тенге'
										inputRef={ref}
										value={value == TRADE || value == FREE ? '' : value}
										onClick={() => setValue('price', '')}
										onChange={(e: ChangeEvent<HTMLInputElement>) =>
											setValue('price', e.target.value)
										}
									/>
								}
							/>
						</RadioGroup>
					</>
				)}
			/>
			<FormHelperText>{helpText}</FormHelperText>
		</FormControl>
	)
}
