import { Profile } from '@/screens/user/Profile'

import { NextPageAuth } from '@/shared/interfaces'

const ProfilePage: NextPageAuth = ({}) => {
	return <Profile />
}

ProfilePage.isOnlyUser = true

export default ProfilePage
