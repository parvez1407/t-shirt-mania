import React from 'react';
import Brother from '../Brother/Brother';
import Myself from '../Myself/Myself';
import Sister from '../Sister/Sister';

const Father = () => {
    return (
        <div className='border-orange-300 border-2'>
            <h4>Father</h4>
            <section className='border-orange-300 border-2 flex p-3'>
                <Myself></Myself>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Father;