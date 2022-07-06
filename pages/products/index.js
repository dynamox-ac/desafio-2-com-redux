import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Creators as ProductsActions } from "../../store/ducks/products";
import { Creators as ProductsReduxSauceActions } from "../../store/ducks/productsReduxSauce";

const ShoppingList = () => {
   const dispatch = useDispatch();
   const productsList = useSelector((state) => state.products.productsList);
   const productsReduxSauceList = useSelector((state) => state.productsReduxSauce.productsList);
   
   useEffect(() => {
      dispatch(ProductsActions.getProductsList())
      dispatch(ProductsReduxSauceActions.getProductsRequest())
   }, []);  
   
   const handleRemoveItem = (productId) => { 
      console.log('Remove Item');
      
      dispatch(ProductsActions.removeProduct(productId)); 
   };

   const handleRemoveReduxSauceItem = (productId) => { 
      console.log('Remove Redux Sauce Item');
      
      dispatch(ProductsReduxSauceActions.deleteProduct(productId)); 
   };
   
      return (
         <main>
            <div>
               <h1>Products</h1>
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
            </div>
            <div>
               <h1>Products Redux Sauce</h1>
               <ul>
                  {productsReduxSauceList.map(product => (
                     <li key={product.id}>
                        <strong>{product.name}</strong>
                        <div>
                           <button onClick={() => handleRemoveReduxSauceItem(product.id)}>Delete</button>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            
         </main>
      );  
};
export default ShoppingList;
