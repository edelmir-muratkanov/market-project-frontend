import { ChangeEvent, useState } from 'react'

import { useDebounce } from '@/shared/hooks'

import { productApi } from '@/store/api/product.api'

export const useSearch = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debounceSearch = useDebounce(searchTerm, 500)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	const { data, isSuccess } = productApi.useGetProductBySearchTermQuery(
		debounceSearch,
		{
			skip: !debounceSearch
		}
	)

	return { searchTerm, handleSearch, data, isSuccess }
}
