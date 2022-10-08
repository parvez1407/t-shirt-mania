import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Special</h4>
            <p>Ring: {house}</p>
            <button onClick={() => setHouse(house + 1)} className='bg-orange-700 px-4 py-2 mt-3 rounded-lg'>Increase</button>
        </div>
    );
};

export default Special;