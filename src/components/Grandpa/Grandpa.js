import React from 'react';
import Aunty from '../Aunty/Aunty';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';

const Grandpa = () => {
    return (
        <div className='border-orange-300 border-2 m-6 rounded-md p-6'>
            <h1 className='text-center font-semibold text-2xl'>Grandpa</h1>
            <section className='flex p-6'>
                <Father></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
            </section>
        </div>
    );
};

export default Grandpa;