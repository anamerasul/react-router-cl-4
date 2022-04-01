import React, { useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
    // const house = 7;

    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    const ornament = 'diamond'

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p> House: {house} <button onClick={handleBuyHouse}>Buy a house</button></p>



            <section style={{ display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunt house={house}></Aunt>

            </section>

        </div>
    );
};

export default Grandpa;