// @ts-ignore
import { Menu, MenuItem } from '@mui/material'
import { NestedMenuItem } from 'mui-nested-menu'
import { FC, MouseEvent, useState } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { useQuery } from 'react-query'

import { Button } from '@/ui/Button'

import { IProductFields } from '@/shared/interfaces/product.interface'

import { CategoryService } from '@/services/category.service'

export const CategorySelect: FC<{
	control: Control<IProductFields, any>
	setValue: UseFormSetValue<IProductFields>
	error: boolean
	helpText?: string
}> = ({ control, setValue, error, helpText }) => {
	const { data } = useQuery('categories', async () => {
		return await CategoryService.getAll()
	})

	const [anchor, setAnchor] = useState<HTMLElement | null>()

	const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
		setAnchor(event.currentTarget)
	}

	const handleClose = () => {
		setAnchor(null)
	}

	const open = !!anchor

	return (
		<Controller
			rules={{ required: true }}
			control={control}
			name={'category.id'}
			defaultValue={0}
			render={({ field: { value, onChange, onBlur } }) => (
				<>
					<input
						name={'category.id'}
						style={{ display: 'none' }}
						value={value}
						onChange={onChange}
						onBlur={onBlur}
					/>
					<Button
						fullWidth={false}
						aria-errormessage={helpText}
						variant='text'
						color={error ? 'error' : 'primary'}
						aria-haspopup={true}
						onClick={handleButtonClick}
					>
						Выберите категорию
					</Button>
					<Menu anchorEl={anchor} open={open} onClose={handleClose}>
						{data?.map(category => (
							<NestedMenuItem
								key={category.id}
								parentMenuOpen={open}
								label={category.name}
							>
								{category?.children?.map(sub => (
									<NestedMenuItem
										key={sub.id}
										parentMenuOpen={open}
										label={sub.name}
									>
										{sub?.children?.map(subSub => (
											<MenuItem
												key={subSub.id}
												onClick={() => {
													setValue('category.id', subSub.id)
													handleClose()
												}}
											>
												{subSub.name}
											</MenuItem>
										))}
									</NestedMenuItem>
								))}
							</NestedMenuItem>
						))}
					</Menu>
				</>
			)}
		></Controller>
	)
}
