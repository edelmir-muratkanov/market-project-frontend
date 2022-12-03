import {
	FormControl,
	FormControlLabel,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	TextField
} from '@mui/material'
import { ChangeEvent, FC, useState } from 'react'
import { Control, Controller } from 'react-hook-form'

import { IProductFields } from '@/shared/interfaces/product.interface'

export const PriceSelect: FC<{
	controlForm: Control<IProductFields, any>
	error: boolean
	helpText?: string
}> = ({ controlForm, error, helpText }) => {
	const [price, setPrice] = useState('')
	const [check, setCheck] = useState(1)

	const handleInputPrice = (event: ChangeEvent<HTMLInputElement>) => {
		setPrice(event.target.value)
	}

	return (
		<FormControl error={error} aria-errormessage={helpText}>
			<FormLabel>Цена</FormLabel>
			<Controller
				rules={{ required: true }}
				name={'price'}
				defaultValue=''
				control={controlForm}
				render={({ field }) => (
					<RadioGroup
						{...field}
						aria-required={true}
						aria-errormessage={helpText}
					>
						<FormControlLabel
							checked={check == 1}
							value={price}
							control={<Radio />}
							label={
								<TextField
									type='number'
									size='small'
									onFocus={() => setCheck(1)}
									label='Цена в тенге'
									variant='outlined'
									// onChange={handleInputPrice}
								/>
							}
						/>
						<FormControlLabel
							checked={check == 2}
							value='Договорная'
							control={<Radio onFocus={() => setCheck(2)} />}
							label='Договорная'
						/>
						<FormControlLabel
							checked={check == 3}
							value='Даром'
							control={<Radio onFocus={() => setCheck(3)} />}
							label='Даром'
						/>
					</RadioGroup>
				)}
			/>
			<FormHelperText>{helpText}</FormHelperText>
		</FormControl>
	)
}
