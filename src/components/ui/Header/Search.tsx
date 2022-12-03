import { InputBase, alpha, styled } from '@mui/material'

export const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	'&:hover .MuiInputBase-input': {
		backgroundColor: alpha(theme.palette.primary.dark, 0.15)
	},
	marginRight: '3rem',
	marginLeft: '3rem',
	width: '100%',
	[theme.breakpoints.down('sm')]: {
		marginLeft: theme.spacing(3),
		width: 'auto'
	}
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center'
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	width: '100%',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1.5, 1.5, 1.5, 0),
		fontSize: 18,
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.down('sm')]: {
			width: '20ch'
		}
	}
}))
