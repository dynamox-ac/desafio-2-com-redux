import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from "react-redux";
import { Creators as ProductsActions } from "../../store/ducks/products";

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function ProductDetails(props) {
	const productDetails = useSelector((state) => state.products.productDetails);
	const [productName, setProductName] = useState(productDetails.name);
	const [productManufacturingDate, setProductManufacturingDate] = useState(productDetails.manufacturingDate);
	const [productPerishable, setProductPerishable] = useState(productDetails.isPerishable);
	const [productExpirationDate, setProductExpirationDate] = useState(productDetails.expirationDate);
	const [productPrice, setProductPrice] = useState(productDetails.price);
  const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ProductsActions.getProductDetails(props.id))
	}, []);

	useEffect(() => {
		setProductName(productDetails.name), 
		setProductManufacturingDate(productDetails.manufacturingDate), 
		setProductPerishable(productDetails.isPerishable),
		setProductExpirationDate(productDetails.expirationDate),
		setProductPrice(productDetails.price)
	}, [productDetails]);

	return (
		<form className={classes.root} noValidate autoComplete="off">
					<TextField
				required
				id="outlined-required"
				label="Product Name"
				value={productName}
				variant="outlined"
				onChange={(event)=>setProductName(event.target.value)}
  			/>
			<TextField
				required
				id="outlined-required"
				label="Manufacturing Date"
				value={productManufacturingDate}
				variant="outlined"
				onChange={(event)=>setProductManufacturingDate(event.target.value)}
  			/>
			<TextField
				required
				id="outlined-required"
				label="Perishable Product?"
				value={productPerishable}
				variant="outlined"
				onChange={(event)=>setProductPerishable(event.target.value)}
  			/>
			<TextField
				required
				id="outlined-required"
				label="Expiration Date"
				value={productExpirationDate}
				variant="outlined"
				onChange={(event)=>setProductExpirationDate(event.target.value)}
  			/>
			<TextField
				required
				id="outlined-required"
				label="Price (Reais)"
				value={productPrice}
				variant="outlined"
				onChange={(event)=>setProductPrice(event.target.value)}
  			/><br></br>
			<Button variant="contained" color="primary">Atualizar</Button>
		</form>
	);
}
