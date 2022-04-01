import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';
import './Aunt.css'

const Aunt = ({ house }) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h2>Aunt </h2>
            <p> house:{house}</p>
            <p>Rings :{ring}</p>
        </div>
    );
};

export default Aunt;