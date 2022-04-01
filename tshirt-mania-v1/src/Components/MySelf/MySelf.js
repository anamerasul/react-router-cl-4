import React from 'react';
import Special from '../Special/Special';
import './MySelf.css'

const MySelf = ({ house, ornament }) => {
    return (
        <div>
            <h2>MySelf</h2>
            <p>house:{house}</p>
            <Special ornament={ornament}></Special>
        </div>
    );
};

export default MySelf;