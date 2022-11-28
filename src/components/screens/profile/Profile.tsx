import { FC } from 'react'

import { Info } from '@/screens/profile/Info'

import { api } from '@/store/api/api'

export const Profile: FC = ({}) => {
	const { data, isLoading } = api.useGetProfileQuery(null)

	if (isLoading) return null

	return (
		<>
			{data && (
				<div>
					<Info {...data} />
				</div>
			)}
		</>
	)
}
