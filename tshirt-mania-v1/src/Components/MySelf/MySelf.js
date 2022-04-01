import React from 'react';
import Special from '../Special/Special';
import './MySelf.css'

const MySelf = ({ house }) => {
    return (
        <div>
            <h2>MySelf</h2>
            <p>house:{house}</p>
            <Special></Special>
        </div>
    );
};

export default MySelf;