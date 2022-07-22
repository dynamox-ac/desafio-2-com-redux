import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Creators as ProductsActions } from "../../store/ducks/products";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleListItems = () => {
    dispatch(ProductsActions.getProductsRequest());
  };
  
  const productsList = useSelector((state) => state.products.productsList);   

  useEffect(() => {
    handleListItems()}, []);

  const handleRemoveItem = (productId) => {
    dispatch(ProductsActions.deleteProductRequest(productId));
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
                <TableCell align="right">{product.isPerishable ? "YES" : "NO"}</TableCell>
                <TableCell align="right">{product.expirationDate}</TableCell>
                <TableCell align="right">{product.price}</TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={() => handleRemoveItem(product.id)}>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}