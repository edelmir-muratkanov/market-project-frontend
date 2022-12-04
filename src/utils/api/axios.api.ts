import axios from 'axios'

import { getContentType } from './api.utils'

export const API_URL = `${process.env.APP_URL}/api`

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: getContentType()
})
