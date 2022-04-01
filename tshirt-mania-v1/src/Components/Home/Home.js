import React, { useState } from 'react';
import useTshirt from '../../Hooks/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {

    const [tshirts] = useTshirt()

    const [cart, setCart] = useState([])

    const handleAddtoCart = (selecteditem) => {
        // console.log(selecteditem);
        const exists = cart.find(tshirt => tshirt._id === selecteditem._id);
        if (!exists) {
            const newCart = [...cart, selecteditem]
            setCart(newCart);

        }

        else {
            alert('item already added')
        }


    }
    const handleRemoveFromCart = (selecteditem) => {
        // console.log(selecteditem)
        const rest = cart.filter(tshirt => tshirt._id !== selecteditem._id)
        setCart(rest)
    }
    return (
        <div className='home-container'>

            <div className="tshirt-container">
                {
                    tshirts.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}

                        handleAddtoCart={handleAddtoCart}
                    ></Tshirt>)
                }


            </div>

            <div className="cart-container">
                <Cart
                    handleRemoveFromCart={handleRemoveFromCart}
                    cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;