import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

// we receive the data here for each product and destructure accordingly
const Product = (props) => {
  const { id, productName, price, productImage } = props.data;

  // now we apply useContext hook to access the context values being passed here
  const { addToCart, cartItems } = useContext(ShopContext);


  const cartItemAmount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>₹{price}</p>
      </div>

      {/* we add an onClick to trigger this addToCart function that we destructured from the shopcontext */}
      {/* here we added a simple check that if the cart item amount is greater than zero then we will do a simple display
       of the actual cartitemamount  */}
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;
