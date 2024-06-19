import React from "react";
import { PRODUCTS } from "../../products";
import  Product  from "./Product";

// importing css to style the component 
import "./shop.css"

const Shop = () => {
  return (
    <div className="shop">
      {/* displaying shop title */}
      <div className="shopTitle">
        <h1>React Shopping Cart</h1>
      </div>

      {/* displaying the products */}
      {/* we have a products object containing all the products data init and we map over that object one by one and return a 
       component which destructures the product data and displays the product card accordingly */}
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
