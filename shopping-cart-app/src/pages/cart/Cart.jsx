import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import {ShopContext} from '../../context/ShopContext';
import CartItem from './CartItem';
import "./Cart.css"

// 
import {useNavigate} from "react-router-dom";


const Cart = () => {

  // here we destructured the cart items from our shop context that we created in the shop context file 
const { cartItems , getCartTotalAmount} = useContext(ShopContext);

// now we assign this getCartTotalAmount() function to  a constant and then use it as the value of our total amount section 
const totalAmount = getCartTotalAmount();

const navigate = useNavigate();

  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
      {/* here we are grabbing the PRODUCTS OBJECT AND THEN WE ARE MAPPING THROUGH IT WITH A CONDITIONAL RENDERING OF -> if the
       cartItems */}
         {PRODUCTS.map((product)=>{
          
          {/* this means that that very product is in our cart as the id is not 0 */}     
               if(cartItems[product.id] !== 0){
                {/* in such a case we return this new component CartItem which will ...*/}
                return <CartItem data={product}/>
               }
         })}
      </div>

 {/* Adding conditional rendering to only display this checkout section if there is something in the cart */}
 {totalAmount > 0 ? (
        // Here we add the cart total amount section and checkout buttons
        <div className='checkout'>
          <p>Subtotal: ₹{totalAmount}</p>
          <button onClick={() => navigate('/')}>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      ) : (
        <h1>The Cart Is Empty</h1>
      )}

    </div>

)}

export default Cart