import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Creators as ProductsReduxSauceActions } from "../../store/ducks/productsReduxSauce";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductsTable() {
  const classes = useStyles();
  const productsList = useSelector((state) => state.productsReduxSauce.productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ProductsReduxSauceActions.getProductsRequest())
  }, []);

  const handleRemoveReduxSauceItem = (productId) => { 
    dispatch(ProductsReduxSauceActions.deleteProduct(productId)); 
  };
  
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Produto (unidade)</TableCell>
            <TableCell align="right">Data de fabricação</TableCell>
            <TableCell align="right">Perecível</TableCell>
            <TableCell align="right">Data de Validade</TableCell>
            <TableCell align="right">Preço (R$)</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productsList.map((product) => (
            <TableRow key={product.name}>
                <TableCell component="th" scope="row">
                    {product.name}
                </TableCell>
                <TableCell align="right">{product.manufacturingDate}</TableCell>
                <TableCell align="right">{product.isPerishable ? "SIM" : "NÃO"}</TableCell>
                <TableCell align="right">{product.expirationDate}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => handleRemoveReduxSauceItem(product.id)}>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}