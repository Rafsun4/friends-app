import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    return (
        <div>
            <h4>Salary ${props.generateSalary}</h4>
        </div>
    );
};

export default Cart;