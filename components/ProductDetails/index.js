import { Button, FormControlLabel, FormLabel, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup } from '@material-ui/core';
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
	priceField: {
		margin: '24px'
	},
	radioGroup: {
		margin: '24px'
	},
	invalidDateAlert: {
		color: 'red',
		textAlign: 'center'
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
	const [isDateValid, setIsDateValid] = useState(true);
	const [formData, setFormData] = useState({id: '', name: '', manufacturingDate: '', isPerishable: '', expirationDate: '', price: ''});
	const loading = useSelector((state) => state.products.loading);

	useEffect(() => {
		dispatch(ProductsActions.getProductDetailsRequest(props.id))
	}, []);

	const productDetails = useSelector((state) => state.products.productDetails);

	useEffect(() => {
		setFormData(productDetails)
	}, [productDetails]);

	useEffect (() => {
		if (formData.isPerishable) { 
			if (formData.manufacturingDate > formData.expirationDate) { 
				setIsDateValid(false);
			} else if (formData.expirationDate==='') {
				setIsDateValid(false);
			} else {
				setIsDateValid(true);
			}
		}
	}, [formData.manufacturingDate, formData.expirationDate, isDateValid, formData.isPerishable]);
	
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
						value={formData.name}
						variant="outlined"
						onChange={e => setFormData({...formData, name: e.target.value})}
					/>
        </Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Manufacturing Date"
						type="date"
						value={formData.manufacturingDate}
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
						onChange={e => setFormData({...formData, manufacturingDate: e.target.value})}
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4} className={classes.priceField}>
					<InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
						<OutlinedInput
							required
							id="outlined-required"
							type="number"
							variant="outlined"
							value={formData.price}
							onChange={e => setFormData({...formData, price: e.target.value})}
							startAdornment={<InputAdornment position="start">R$</InputAdornment>}
						/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<RadioGroup className={classes.radioGroup} aria-label="productPerishable" name="productPerishable" value={formData.isPerishable}>
						<FormLabel component="legend">Perishable Product?</FormLabel>
						<FormControlLabel
							name='perishable' 
							value={true}
							variant="outlined"
							control={<Radio />} 
							onChange={e => setFormData({...formData, isPerishable: true})} 
							label="yes" 
							id="yes"
						/>
						<FormControlLabel
							name='perishable' 
							value={false}
							variant="outlined"
							control={<Radio />} 
							onChange={e => setFormData({...formData, isPerishable: false})} 
							label="no" 
							id="no"
						/>
					</RadioGroup>
				</Grid>
				{formData.isPerishable &&
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Expiration Date"
						type="date"
						className={classes.textField}
						value={formData.expirationDate}
						variant="outlined"
						InputLabelProps={{
							shrink: true,
						}}
						onChange={e => setFormData({...formData, expirationDate: e.target.value})}
					/>
				</Grid>
				}
				<Grid item xs={12} className={classes.myButton}>
					<Button 
					// onClick={() => handleProductUpdate()} 
					disabled={!isDateValid || !formData.name || !formData.manufacturingDate || !formData.price}
					variant="contained" color="primary">Update</Button>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					{formData.isPerishable && !isDateValid && <p className={classes.invalidDateAlert}>A data de validade precisa ser maior que a data de fabricação</p>}
				</Grid>
			</Grid>	
		</form>
	);
}
