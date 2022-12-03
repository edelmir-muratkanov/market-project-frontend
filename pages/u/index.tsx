import { Profile } from '@/screens/Profile'

import { NextPageAuth } from '@/providers/private-route.interface'

const ProfilePage: NextPageAuth = ({}) => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
