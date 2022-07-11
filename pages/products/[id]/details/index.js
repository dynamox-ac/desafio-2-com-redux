import { useRouter } from 'next/router'
import React from 'react';
import ProductDetails from '../../../../components/ProductDetails';

const ProductDetailsPage = () => {
	const router = useRouter()
	const idProduct = router.query.id?parseInt(router.query.id):null;

	if (!idProduct) {
		return <></>
	}
	return (
		<>
			<h1>Product Details</h1>
			<ProductDetails id={idProduct}/>
		</>
		
	)
}

export default ProductDetailsPage;
