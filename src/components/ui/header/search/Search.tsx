import SearchIcon from '@mui/icons-material/Search'
import { Box, Stack, Typography, useTheme } from '@mui/material'

import {
	SearchBarWrapper,
	SearchIconWrapper,
	StyledInputBase
} from '@/ui/header/search/search.style'
import { useSearch } from '@/ui/header/search/useSearch'

import { useOutside } from '@/shared/hooks'

export const Search = () => {
	const { data, isSuccess, handleSearch, searchTerm } = useSearch()
	const { ref, isShow, setIsShow } = useOutside(false)
	const { palette, shadows } = useTheme()

	return (
		<Box
			width='100%'
			marginX={4}
			ref={ref}
			sx={{
				position: 'relative'
			}}
		>
			<SearchBarWrapper onClick={() => setIsShow(true)}>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledInputBase
					placeholder='Поиск...'
					inputProps={{ 'aria-label': 'search' }}
					onChange={handleSearch}
					value={searchTerm}
				/>
			</SearchBarWrapper>

			{isShow && (
				<Stack
					position='absolute'
					left={0}
					top='3.6rem'
					width='100%'
					minHeight='6rem'
					bgcolor={palette.common.white}
					boxShadow={shadows}
					alignItems='center'
					justifyContent='center'
					spacing={3}
					paddingY={1}
				>
					{isSuccess && !!data?.length ? (
						data?.map(product => <div>sa</div>)
					) : (
						<Typography>Ничего не найдено</Typography>
					)}
				</Stack>
			)}
		</Box>
	)
}
