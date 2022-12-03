import { LinkProps, Link as MuiLink } from '@mui/material'
import RouterLink from 'next/link'
import { forwardRef } from 'react'

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
	return <MuiLink component={RouterLink} ref={ref} {...props} />
})
