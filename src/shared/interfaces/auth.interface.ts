export interface IAuthFields {
	password: string
	email: string
}

export interface IAuthData {
	user: {
		id: number
		email: string
	} | null
	accessToken: string
}

export interface IAuthInitialState extends IAuthData {
	isLoading: boolean
}
