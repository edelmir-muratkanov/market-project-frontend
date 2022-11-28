export interface IAuthFields {
	password: string
	email: string
}

export const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
