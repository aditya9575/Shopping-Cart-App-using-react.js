import React, { createContext, useState } from 'react'
import { useContext } from 'react'
import { PRODUCTS } from '../products';


// here we are going to define our states 

export const ShopContext = createContext(null);



//we create a function to get the initial state of cartItems 
const getDefaultCart = () => {
    let cart = {}
    for(let i=1; i<PRODUCTS.length + 1; i++){
        // for each item we will set the initial quantity to 0
        cart[i] = 0;
    }
    return cart;
}


export const ShopContextProvider = (props) => {

// we need a state that we can alter from both the components which are shop.jsx and cart.jsx as that is how we will be needing 
// the cart functionality to work i.e -> user can use add to cart button and also edit the order by increasing or decreasing the
// order number from being inside the cart component
// this cartItems state will be an object with 8 properties and we used a function to extract the initial values 
const [cartItems,setCartItems] = useState(getDefaultCart());

// Now with this initial state we have to add functions to add delete and update and total amount 

const getCartTotalAmount = () =>{
  let totalAmount = 0;

  // now we are going to loop through every item in the cartItems object and see if their values are greater than 0 and if it is so 
  // it means that item is in the cart and then we grab their value which is their ->"amount of them in the cart" and multiply it by
  // price of the product and then add it to the total amount 

  // item here is the id representing the product and  cartItems[item] is the amount of that specific product in the cart
  for(const item in cartItems){
    if(cartItems[item] > 0){
      let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.price
    }
  }
   return totalAmount;

}

const addToCart = (itemId ) => {
      setCartItems((prev)=>({...prev , [itemId]: prev[itemId] + 1}))
}

const removeFromCart = (itemId ) => {
    setCartItems((prev)=>({...prev , [itemId]:prev[itemId] - 1}))
}

const updateCartItems = (newAmount , itemId ) => {
  setCartItems((prev)=>({...prev , [itemId]:newAmount}))
}

// creating the object which includes all the states and functions that are to be used 
const contextValue = { cartItems, addToCart , removeFromCart , updateCartItems , getCartTotalAmount}

// adding a log statement to see the change through our add to cart's functionality 
// console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
         {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContext