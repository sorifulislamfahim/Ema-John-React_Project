import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h2>This is cart part</h2>
            <p>Selected Item: {cart.length}</p>
        </div>
    );
};

export default Cart;