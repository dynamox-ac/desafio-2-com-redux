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
import { Creators as ProductsActions } from "../../store/ducks/products";
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


const restClient = axios.create({baseURL: 'http://localhost:3004'});

export default function ProductsTable() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleListItems = () => { 
    restClient({
      method: 'get',
      url: '/products',       
    }).then(function (response) {
      dispatch(ProductsActions.setProductsRequest(response.data))
    });
  };
  const productsList = useSelector((state) => state.products.productsList);   

  useEffect(() => {
    handleListItems()
  }, []);

  const handleRemoveItem = (productId) => { 
    const request = restClient.delete(`/products/${productId}`);
    request.then(function (response) {
      dispatch(ProductsActions.deleteProduct(response.data));
      handleListItems();
    });
    
  };
  
  const handleProductInclusion = () => {
    restClient({
      method: 'post',
      url: '/products',
      data: {id: 11, name: 'Quinoa', manufacturingDate: '27-08-2022', isPerishable: false, expirationDate: 'NA', price: 10.5}       
    }).then(function (response) {
      console.log(response.data)
      dispatch(ProductsActions.addProductRequest(response.data))
    });
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
                    <Button variant="contained" color="primary" onClick={() => handleRemoveItem(product.id)}>Delete</Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}