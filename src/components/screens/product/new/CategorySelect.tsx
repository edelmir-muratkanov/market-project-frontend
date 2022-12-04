// @ts-ignore
import { Menu, MenuItem, Typography } from '@mui/material'
import { NestedMenuItem } from 'mui-nested-menu'
import { FC, MouseEvent, useState } from 'react'
import { Control, Controller, UseFormSetValue } from 'react-hook-form'
import { useQuery } from 'react-query'

import { Button } from '@/ui/index'

import { ICategory, IProductFields } from '@/shared/interfaces'

import { CategoryService } from '@/services/index'

export const CategorySelect: FC<{
	control: Control<IProductFields, any>
	setValue: UseFormSetValue<IProductFields>
	error: boolean
	helpText?: string
}> = ({ control, setValue, error, helpText }) => {
	const { data } = useQuery('categories', async () => {
		return await CategoryService.getAll()
	})

	const findCategoryById = (id: number): ICategory | undefined => {
		if (id == 0) return

		let res = undefined

		data?.map(c => {
			if (c.id == id) res = c
			c.children?.map(s => {
				if (s.id == id) res = s
				s.children?.map(ss => {
					if (ss.id == id) res = ss
				})
			})
		})
		return res
	}

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
						type='hidden'
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
						{value == 0 ? 'Выберите категорию' : findCategoryById(value)?.name}
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
