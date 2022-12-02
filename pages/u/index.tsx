import { Profile } from '@/screens/profile/Profile'

import { NextPageAuth } from '@/providers/private-route.interface'

const ProfilePage: NextPageAuth = ({}) => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
