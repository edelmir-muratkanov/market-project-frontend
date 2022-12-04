import { FC } from 'react'

import { useAuth } from '@/shared/hooks'

import { rootApi } from '@/store/api'

export const Profile: FC = ({}) => {
	const { user } = useAuth()
	const { data, isLoading } = rootApi.useGetPrivateProfileQuery(null, {
		skip: !user
	})

	if (isLoading) return <div>Loading...</div>

	return <div>{data?.email}</div>
}
