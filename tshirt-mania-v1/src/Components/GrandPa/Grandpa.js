import React, { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'


//context api
/* 
//context api
** 1 call createContext with a default value
** 2 set a variable of the context with uppercase
**3 make sure you export the  context to use it other place
** 4. Wrap you child content Using EX.(RingContext.Provider)
**5 .provide a value
**6.To consume the Context from Child Component
**7. useContext hook and you will you need to pass ContextName'
**8 make sure you takes note
*/

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
        <RingContext.Provider value={[ornament, house, setHouse]}>
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