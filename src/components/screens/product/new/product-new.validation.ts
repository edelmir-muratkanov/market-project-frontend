import * as yup from 'yup'

export const schema = yup.object().shape({
	title: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(5, 'Минимум 5 символов'),
	description: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.min(20, 'Минимум 20 символов')
		.max(500, 'Максимум 500 символов'),
	address: yup
		.string()
		.trim()
		.required('Обязательное поле')
		.max(70, 'Максимум 70 знаков'),
	phone: yup.string().trim().required('Обязательное поле'),
	price: yup
		.string()
		.trim()
		.min(1, 'Обязательное поле')
		.required('Обязательное поле'),
	category: yup.object({
		id: yup.number().min(1, 'Выберите категорию').required('Обязательное поле')
	})
})
