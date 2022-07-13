import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

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
	// gridContainer: {
	// 	justifyContent: 'center'
	// },
	myButton: {
		display: 'flex',
		justifyContent: 'center',
	}
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
			<Grid className={classes.gridContainer} container row spacing={2}>
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
						onChange={(event)=>setProductName(event.target.value)}
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
