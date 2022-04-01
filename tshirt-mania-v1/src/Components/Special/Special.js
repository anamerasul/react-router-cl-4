import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';
import './Special.css'


const Special = () => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: {ring}</p>
        </div>
    );
};

export default Special;