import React from 'react';
import './Uncle.css'
const Uncle = ({ house }) => {
    return (
        <div>
            <h2>Uncle</h2>
            <p> House: {house}</p>
        </div>
    );
};

export default Uncle;