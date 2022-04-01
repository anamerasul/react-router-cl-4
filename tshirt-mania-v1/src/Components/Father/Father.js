import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = (props) => {

    console.log(props)
    const { house, ornament } = props
    return (
        <div>
            <h2>Father </h2>
            <p>House{house}</p>

            <div style={{ display: 'flex' }}>
                <MySelf house={house} ornament={ornament}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>

            </div>

        </div>
    );
};

export default Father;