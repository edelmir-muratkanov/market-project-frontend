import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { StyledEngineProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import ReduxToastrLib from 'react-redux-toastr'
import { PersistGate } from 'redux-persist/integration/react'

import { AuthProvider } from '@/providers/AuthProvider'
import { TypeComponentAuthFields } from '@/providers/private-route.interface'

import '@/utils/styles.scss'

import { persistor, store } from '@/store/store'

type TypeAppProps = AppProps & TypeComponentAuthFields

const cache = createCache({
	key: 'css',
	prepend: true
})

function App({ Component, pageProps }: TypeAppProps) {
	const queryClient = new QueryClient()

	return (
		<>
			<NextProgressBar
				color='#5f3df3'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<StyledEngineProvider injectFirst>
				<CacheProvider value={cache}>
					<Provider store={store}>
						<PersistGate persistor={persistor} loading={null}>
							<QueryClientProvider client={queryClient}>
								<AuthProvider Component={Component}>
									<Component {...pageProps} />
									<ReduxToastrLib
										newestOnTop={false}
										preventDuplicates
										progressBar
										closeOnToastrClick
										timeOut={4000}
										transitionIn='fadeIn'
										transitionOut='fadeOut'
									/>
								</AuthProvider>
							</QueryClientProvider>
						</PersistGate>
					</Provider>
				</CacheProvider>
			</StyledEngineProvider>
		</>
	)
}

export default App
