import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({ house }) => {
    return (
        <div>
            <h4>Cousin</h4>
            <p>House: {house}</p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;