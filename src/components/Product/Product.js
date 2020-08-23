import React from "react";
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  console.log(props);
  const { name, seller,img,price, stock } = props.product;
  return (
    <div className="product-container">
      <div>
          <img src={img} alt=""/>
      </div>
      <div className="product-content">
        <h3>{name}</h3>
        <p>
          by: {seller}
          <br/>
  <p><small> ${price}</small></p>
        </p>

  <p>Only {stock} left in stock - order soon</p>
  <button className="add-btn" onClick={()=>props.addClickHandle(props.product)}> <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
