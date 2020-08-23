import React from 'react';

const Cart = (props) => {
    console.log(props);
    const cart = props.cart
    // const total = cart.reduce((total, prd)=> total + prd.price, 0);
    let total = 0;

    for(let i = 0; i < cart.length;i++){
        const product = cart[i];
        total = total + product.price;
    }


    let shipping = 0;
    if(total > 12) shipping = 4.99;
    else if(total > 0) shipping = 12.15;

    const tax = Math.round(total/10);

    return (
        <div>
             <h2>Order Summary</h2>
             <h5>Items added {props.cart.length}</h5>
    <p><small>Shipping: ${shipping}</small></p>
    <p>
    <smal>Vat + Tax : {tax}</smal>
    </p>
    <p>Total Price: $ <strong>{(total + shipping + tax).toFixed(2)}</strong> </p>
        </div>
    );
};

export default Cart;