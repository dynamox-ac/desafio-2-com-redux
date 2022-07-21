import { Button, FormControlLabel, FormLabel, InputAdornment, InputLabel, OutlinedInput, Radio, RadioGroup } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { Creators as ProductsActions } from "../../store/ducks/products";

const useStyles = makeStyles((theme) => ({
	myTitle: {
		textAlign:'center',
		marginTop: '2rem'
	},
	mysubtitle: {
		textAlign:'center',
	},
	perishableProductContainer: {
		margin: '24px',
		fontFamily: 'Roboto'
	},
	priceField: {
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
		paddingRight: '3rem'
    },
		'& .MuiFormGroup-root': {
			paddingTop: '1.8rem',
    	paddingLeft: '2rem'
		},
		'& .MuiFormControlLabel-root ' : {
			marginTop: '1rem'
		},
	flexGrow:1,
  },
	myButton: {
		'& .MuiButton-containedPrimary':{
			backgroundColor: 'green'
		},
		display: 'flex',
		justifyContent: 'center',
	}
}));

export default function NewProduct() {
  const classes = useStyles();
	const dispatch = useDispatch();
	const [isDateValid, setIsDateValid] = useState(true);

	const [formData, setFormData] = useState({id: '', name: '', manufacturingDate: '', isPerishable: '', expirationDate: '', price: ''});

	const handleProductInclusion = useCallback(() => {
		dispatch(ProductsActions.addProductRequest(formData))
	},[formData, dispatch]);

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

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<Grid className={classes.gridContainer} container spacing={2}>
				<Grid item xs={12}>
					<h1 className={classes.myTitle}>Product Registration: Add a new product to your list!</h1>
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
						className={classes.textField}
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
						onClick={() => handleProductInclusion()} 
						disabled={!isDateValid || !formData.name || !formData.manufacturingDate || !formData.price || formData.isPerishable===''} 
						variant="contained" 
						color="primary">
							Add Product
					</Button>
				</Grid>
				<Grid item xs={12} sm={12} md={12} lg={12}>
					{formData.isPerishable && !isDateValid && <p className={classes.invalidDateAlert}>A data de validade precisa ser maior que a data de fabricação</p>}
				</Grid>
			</Grid>	
		</form>
	);
}
