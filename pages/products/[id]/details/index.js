import { useRouter } from 'next/router'
import React from 'react';
import ProductDetails from '../../../../components/ProductDetails';

const ProductDetailsPage = () => {
	const router = useRouter()
	const idProduct = router.query.id;
	console.log("ID ==", idProduct);

	return (
		<>
			<h1>{idProduct}</h1>
			<ProductDetails id={idProduct}/>
		</>
	)
}

export default ProductDetailsPage;
