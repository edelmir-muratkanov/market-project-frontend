import { ProductNew } from '@/screens/product/new/ProductNew'

import { NextPageAuth } from '@/shared/interfaces'

const ProductCreatePage: NextPageAuth = () => {
	return <ProductNew />
}

ProductCreatePage.isOnlyUser = true

export default ProductCreatePage
