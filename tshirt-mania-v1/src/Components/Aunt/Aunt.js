import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/Grandpa';
import './Aunt.css'

const Aunt = () => {
    const [ornament, house, setHouse] = useContext(RingContext)
    const handleHouseIncrese = () => {
        const newHouse = house + 1;
        setHouse(newHouse)
    }
    return (
        <div>
            <h2>Aunt </h2>
            <p> house:{house}</p>
            <p>Rings :{ornament}</p>
            <button onClick={() => setHouse(house + 1)}>buy</button>
            <button onClick={handleHouseIncrese}>buy aunts invest</button>
        </div>
    );
};

export default Aunt;