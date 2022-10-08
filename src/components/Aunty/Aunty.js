import React from 'react';
import Cousin from '../Cousin/Cousin';

const Aunty = ({ house }) => {
    return (
        <div>
            <h4>Aunty</h4>
            <p>House: {house}</p>
            <section className='flex'>
                <Cousin house={house}></Cousin>
                <Cousin house={house}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;