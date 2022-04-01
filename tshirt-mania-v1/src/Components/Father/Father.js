import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/MySelf';
import Sister from '../Sister/Sister';
import './Father.css'

const Father = (props) => {

    const { house } = props
    return (
        <div>
            <h2>Father </h2>
            <p>House{house}</p>

            <div style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>

            </div>

        </div>
    );
};

export default Father;