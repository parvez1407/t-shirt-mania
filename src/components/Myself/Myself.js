import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ring }) => {
    return (
        <div>
            <h5>Myself</h5>
            <p>House: {house}</p>
            <section>
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;