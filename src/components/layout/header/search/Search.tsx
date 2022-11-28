import { FC } from 'react'
import { FaSearch as SearchIcon } from 'react-icons/fa'

import styles from './Search.module.scss'
import { useSearch } from '@/components/layout/header/search/useSearch'

export const Search: FC = ({}) => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch()

	return (
		<div className={styles.search}>
			<label>
				<SearchIcon size={20} fillOpacity={0.7} />
				<input
					type='text'
					placeholder='Поиск...'
					value={searchTerm}
					onChange={handleSearch}
				/>
			</label>

			{isSuccess && (
				<div className={styles.result}>
					{data?.length ? (
						data.map(product => <div>{product.title}</div>)
					) : (
						<div>Не найдено</div>
					)}
				</div>
			)}
		</div>
	)
}
