import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button, InputAdornment } from '@material-ui/core';

import { useRouter } from 'next/router'
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
  const classes = useStyles();

	console.log("ID componente =", props);

	const productDetails = useSelector((state) => state.products.productDetails);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(ProductsActions.getProductDetails(props))
	}, []);

	return (
		<form className={classes.root} noValidate autoComplete="off">
			<TextField
				required
				id="outlined-required"
				label={productDetails.name}
				defaultValue="Nome do produto"
				variant="outlined"
  		/>
			<TextField
				required
				id="outlined-required"
				label="Manufacturing Date"
				defaultValue="Data de fabricação"
				variant="outlined"
  		/>
			<TextField
				required
				id="outlined-required"
				label="Perishable Product?"
				defaultValue="SIM ou NÃO"
				variant="outlined"
  		/>
			<TextField
				required
				id="outlined-required"
				label="Expiration Date"
				defaultValue="Data de validade"
				variant="outlined"
  		/>
			<TextField
				required
				id="outlined-required"
				label="Price (Reais)"
				defaultValue="0,00"
				variant="outlined"
				startAdornment={<InputAdornment position="start">R$</InputAdornment>}
  		/><br></br>
			<Button variant="contained" color="primary">Atualizar</Button>
		</form>
	);
}
