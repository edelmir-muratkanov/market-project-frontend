import { FC } from 'react'

import { Link } from '@/ui/Link'

export const Logo: FC = () => {
	return (
		<Link
			underline='none'
			color='black'
			href='/'
			variant='h4'
			fontWeight='bold'
		>
			MARKET
		</Link>
	)
}
