import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {

    // conditinal rendering
    // 1 element variable
    // 2 ternary operator condition
    // 3 && operator
    //4 || 

    let command;

    if (cart.length === 0) {
        command =
            <div>
                <h5>Oh kipta koroch kor</h5>
                <p>Koroch kor</p>
            </div>
    }

    else if (cart.length === 1) {
        command = <p>please add more</p>
    }

    else {
        command = <p>Thanks for adding</p>
    }

    return (


        <div>

            <h2>Item selected :{cart.length}</h2>
            {
                cart.map(tshirt => <p
                    key={tshirt._id}
                >

                    {tshirt.name}<button onClick={() => handleRemoveFromCart(tshirt)}>  X</button></p>)
            }

            {command}

            {cart.length !== 4 ? <p>keep adding</p> : <button>Clear All</button>}

            {cart.length === 3 && <div className="orange">
                <h3>Triggolnal</h3>
                <p>3jon ke gift diba</p>
            </div>}

            {cart.length === 0 || <p className='orange'>Yay you are buying</p>}

            {cart.length === 4 && <button>Review order</button>}
        </div>
    );
};

export default Cart;