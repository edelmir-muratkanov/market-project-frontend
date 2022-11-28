import { useRouter } from 'next/router'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useQuery } from 'react-query'

import { ICategory } from '@/shared/interfaces/category.interface'

import { CategoryService } from '@/services/category.service'

import { Meta } from '@/utils/Meta/Meta'
import { IMeta } from '@/utils/Meta/meta.interface'

import styles from './Layout.module.scss'
import { Sidebar } from './Sidebar'
import { Header } from './header/Header'

const Layout: FC<PropsWithChildren<IMeta & { isSidebar: boolean }>> = ({
	children,
	isSidebar,
	...meta
}) => {
	const { query, push } = useRouter()

	const { data } = useQuery<ICategory>(
		['categories', query.id],
		async () => {
			return await CategoryService.get(query.id ? Number(query.id) : 1)
		},
		{}
	)

	useEffect(() => {
		if (query && query.id == '1') {
			push('/')
		}
	})

	return (
		<>
			<Meta {...meta} />
			<main className={styles.main}>
				<Header />
				<section className={styles.content}>
					{isSidebar && (
						<Sidebar categories={data?.children} parent={data?.parent} />
					)}
					<div className={styles.wrapper}>{children}</div>
				</section>
			</main>
		</>
	)
}

export default Layout
