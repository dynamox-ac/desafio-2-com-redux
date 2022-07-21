import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { Creators as ProductsActions } from "../../store/ducks/products";

const useStyles = makeStyles((theme) => ({
	myTitle: {
		textAlign:'center',
		marginTop: '2rem'
	},
  root: {
    '& .MuiTextField-root': {
    margin: theme.spacing(3),
    width: '100%',
	  paddingRight: '3rem',
    },
	flexGrow:1,
  },
	myButton: {
		display: 'flex',
		justifyContent: 'center',
	}
}));

export default function ProductDetails(props) {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [productName, setProductName] = useState('');
	const productDetails = useSelector((state) => state.products.productDetails);
	console.log('product details', productDetails);
	
	const loading = useSelector((state) => state.products.loading);
	
	
	console.log('productName', productName);
	const [productManufacturingDate, setProductManufacturingDate] = useState(productDetails.manufacturingDate);
	const [productPerishable, setProductPerishable] = useState(productDetails.isPerishable);
	const [productExpirationDate, setProductExpirationDate] = useState(productDetails.expirationDate);
	const [productPrice, setProductPrice] = useState(productDetails.price);

	useEffect(() => {
		dispatch(ProductsActions.getProductDetailsRequest(props.id))
	}, []);

	useEffect(() => {
		setProductName(productDetails.name), 
		setProductManufacturingDate(productDetails.manufacturingDate), 
		setProductPerishable(productDetails.isPerishable),
		setProductExpirationDate(productDetails.expirationDate),
		setProductPrice(productDetails.price)
	}, [productDetails]);
	
	if(loading) {
		return (
			<h1>Loading...</h1>
		)
	}

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Grid className={classes.gridContainer} container spacing={2}>
				<Grid item xs={12}>
					<h1 className={classes.myTitle}>Update Product Details</h1>
        </Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Product Name"
						value={productName}
						variant="outlined"
						// onChange={(event)=>setProductName(event.target.value)}
					/>
        </Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Manufacturing Date"
						value={productManufacturingDate}
						variant="outlined"
						onChange={(event)=>setProductManufacturingDate(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Perishable Product?"
						value={productPerishable}
						variant="outlined"
						onChange={(event)=>setProductPerishable(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Expiration Date"
						value={productExpirationDate}
						variant="outlined"
						onChange={(event)=>setProductExpirationDate(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Price (Reais)"
						value={productPrice}
						variant="outlined"
						onChange={(event)=>setProductPrice(event.target.value)}
					/>
				</Grid>
				<Grid item xs={12} className={classes.myButton}>
					<Button variant="contained" color="primary">Update</Button>
				</Grid>
			</Grid>	
		</form>
	);
}
