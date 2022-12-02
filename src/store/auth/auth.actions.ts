import { createAsyncThunk } from '@reduxjs/toolkit'
import { toastr } from 'react-redux-toastr'

import { IAuthFields } from '@/shared/interfaces/auth.interface'

import { IAuthData } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'

import { toastrError } from '@/utils/api.utils'

export const register = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/register',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(email, password)
			toastr.success('Регистрация', 'Прошла успешно')
			return response
		} catch (e) {
			toastrError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<IAuthData, IAuthFields>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const response = await AuthService.login(email, password)
			toastr.success('Авторизация', 'Прошла успешно')
			return response
		} catch (e) {
			toastrError(e)
			return thunkAPI.rejectWithValue(e)
		}
	}
)

export const logout = createAsyncThunk('auth/logout', () => {
	return {}
})
