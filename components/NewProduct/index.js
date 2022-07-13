import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
	myTitle: {
		textAlign:'center',
		marginTop: '2rem'
	},
	mysubtitle: {
		textAlign:'center',
	},
  root: {
    '& .MuiTextField-root': {
    margin: theme.spacing(3),
    width: '100%',
	paddingRight: '3rem'
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
						value="Product Name"
						variant="outlined"
					/>
        </Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Manufacturing Date"
						value="DD-MM-YYYY"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Perishable Product?"
						value="true or false"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Expiration Date"
						value="DD-MM-YYYY"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} sm={12} md={4} lg={4}>
					<TextField
						required
						id="outlined-required"
						label="Price (Reais)"
						value="R$ 00.00"
						variant="outlined"
					/>
				</Grid>
				<Grid item xs={12} className={classes.myButton}>
					<Button variant="contained" color="primary">Add Product</Button>
				</Grid>
			</Grid>	
		</form>
	);
}
