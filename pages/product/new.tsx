import { ProductNew } from '@/screens/product/new/ProductNew'

import { NextPageAuth } from '@/providers/private-route.interface'

const ProductCreatePage: NextPageAuth = () => {
	return <ProductNew />
}

ProductCreatePage.isOnlyUser = true

export default ProductCreatePage
