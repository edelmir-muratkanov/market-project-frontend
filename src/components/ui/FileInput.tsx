import { CloudUpload } from '@mui/icons-material'
import {
	ImageList,
	ImageListItem,
	ImageListItemBar,
	Paper
} from '@mui/material'
import { FC } from 'react'
import Dropzone from 'react-dropzone'
import { Control, Controller } from 'react-hook-form'

import { IProductFields } from '@/shared/interfaces'

export const FileInput: FC<{
	control: Control<IProductFields, any>
}> = ({ control }) => {
	return (
		<Controller
			control={control}
			name='images'
			defaultValue={[]}
			render={({ field: { onChange, onBlur, value } }) => (
				<>
					<Dropzone onDrop={onChange}>
						{({ getRootProps, getInputProps }) => (
							<Paper
								sx={{
									width: '100%',
									background: '#eee',
									textAlign: 'center',
									cursor: 'pointer',
									color: '#333',
									marginTop: '20px'
								}}
								variant='outlined'
								{...getRootProps()}
							>
								<CloudUpload
									sx={{
										marginTop: '16px',
										color: '#888',
										fontSize: '42px'
									}}
								/>
								<input
									multiple
									accept='images/*'
									type='file'
									name='images'
									onBlur={onBlur}
									{...getInputProps()}
								/>
								<p>Перетащите изображения сюда или кликните для выбора</p>
							</Paper>
						)}
					</Dropzone>
					{value && (
						<ImageList
							sx={{
								margin: 0
							}}
							cols={3}
						>
							{value.map(file => {
								const src = URL.createObjectURL(file)
								return (
									<ImageListItem key={src}>
										<img
											sizes={file.size.toLocaleString()}
											src={src}
											alt={file.name}
										/>
										<ImageListItemBar title={file.name} />
									</ImageListItem>
								)
							})}
						</ImageList>
					)}
				</>
			)}
		/>
	)
}
