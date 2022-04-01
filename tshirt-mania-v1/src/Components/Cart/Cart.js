import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    return (
        <div>
            <h2>Item selected :{cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >

                    {tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt)}>  X</button></p>)
            }
        </div>
    );
};

export default Cart;