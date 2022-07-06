import React, { Component, useEffect, useReducer } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

import { Creators as ProductsActions } from "../../store/ducks/products";


const ShoppingList = () => {
   const dispatch = useDispatch();
   const productsList = useSelector((state) => state.products.productsList);
   // console.log(productsList);
   // console.log('ProductsActions', ProductsActions);
   // console.log('ProductsActions.getProductsRequest()', ProductsActions.getProductsRequest());
      // const { productsList, deleteProduct } = this.props;
   useEffect(() => {
   //    dispatch({
   //       "type": "GET_PRODUCTS_REQUEST"
   //   })
   dispatch(
      ProductsActions.getProductsList()
   )
   }, [])  
   
   const removeProductActionCreator = (id) => {
      return {
         type: "products/REMOVE",
         payload: {
           id
         }
      }
   }

   const handleRemoveItem = (productId) => { 
      console.log('Remove');
      
      dispatch(removeProductActionCreator(productId)); 
   };
   // console.log('ProductsActions.removeProduct()', ProductsActions.removeProduct());
   
      return (
         <main>
            <ul>
               {productsList.map(product => (
                  <li key={product.id}>
                     <strong>{product.name}</strong>
                     <div>
                        <button onClick={() => handleRemoveItem(product.id)}>Delete</button>
                     </div>
                  </li>
               ))}
            </ul>
         </main>
      );  
};
export default ShoppingList;

// const mapStateToProps = state => ({
//    products: state.products
//  });
 
//  const mapDispatchToProps = dispatch =>
//    bindActionCreators(ActionsList, dispatch);
 
//  export default connect(
//    mapStateToProps,
//    mapDispatchToProps,
//  )(ShoppingList);
