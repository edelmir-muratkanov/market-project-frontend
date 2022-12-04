import { parsePhoneNumberFromString } from 'libphonenumber-js'

export const normalizePhoneNumber = (value: string) => {
	if (value.startsWith('8')) {
		value = value.slice(1)
	}
	if (value.startsWith('+7')) {
		value = value.slice(2)
	}
	const phoneNumber = parsePhoneNumberFromString(value, 'KZ')
	if (!phoneNumber) return value

	return phoneNumber.formatNational()
}
