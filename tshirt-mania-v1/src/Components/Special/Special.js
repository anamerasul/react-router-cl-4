import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';
import './Special.css'


const Special = () => {
    const [ornament, house, setHouse] = useContext(RingContext)
    return (
        <div>
            <h5>Special</h5>
            <p>Gift: {ornament}</p>
            <p>House {house}</p>
            <button onClick={() => setHouse(house + 1)}>buy</button>
        </div>
    );
};

export default Special;