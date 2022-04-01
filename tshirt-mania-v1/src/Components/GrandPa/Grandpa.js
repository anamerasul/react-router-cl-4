import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const RingContext = createContext('diamond ring')
const Grandpa = () => {
    // const house = 7;

    const [house, setHouse] = useState(1);
    const handleBuyHouse = () => {
        const newHouseCount = house + 1;
        setHouse(newHouseCount)
    }

    const ornament = 'diamond'

    return (
        <RingContext.Provider value={ornament}>
            <div className='grandpa'>
                <h2>Grandpa</h2>
                <p> House: {house} <button onClick={handleBuyHouse}>Buy a house</button></p>



                <section style={{ display: 'flex' }}>
                    <Father house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunt house={house}></Aunt>

                </section>

            </div>
        </RingContext.Provider>
    );
};

export default Grandpa;