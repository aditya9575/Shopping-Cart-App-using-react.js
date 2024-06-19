import React, { useContext } from "react";
import ShopContext from "../../context/ShopContext";

const CartItem = (props) => {
  // here we are destructuring everything about the product from our props which ultimately is product being passed on from the cart
  const { id, productName, price, productImage } = props.data;

  //   we get our cartItems context
  const { cartItems, addToCart, removeFromCart,updateCartItems } = useContext(ShopContext);

  return (
    // here we show our cartItems that are being added and also that how will all the items in the cart will be displayed
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b> {productName} </b>
        </p>
        <p>₹{price}</p>

        {/* adding plus and minus buttons and alterable input to it  */}
        <div className="countHandler">

          <button onClick={() => removeFromCart(id)}>-</button>


          {/* this input so that we can manually change the value of the product added which will have the initial value of the
     items being added and then we can alter it accordingly and for it we add onChange to it and trigger the updateCartItems
      function with it and also pass in the change value and the product id to it */}
          <input type="text" value={cartItems[id]}  onChange={(e)=>{updateCartItems(Number(e.target.value),id)}}/>


          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
