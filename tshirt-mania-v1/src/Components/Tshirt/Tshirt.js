import React from 'react';
import './Tshirt.css'

const Tshirt = (props) => {

    const { handleAddtoCart, tshirt } = props
    const { name, picture, price } = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt={name} />
            <h4>Name: {name}</h4>
            <p> price : ${price}</p>
            <button onClick={() => handleAddtoCart(tshirt)}>Add to cart</button>
        </div>
    );
};

export default Tshirt;