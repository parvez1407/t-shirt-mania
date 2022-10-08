import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Friend = () => {
    const [house, setHouse] = useContext(RingContext);
    return (
        <div>
            <h4>Friend</h4>
            <p>House: {house}</p>
            <button onClick={() => setHouse(house - 1)} className='bg-orange-700 px-4 py-2 mt-3 rounded-lg'>Decrease</button>
        </div>
    );
};

export default Friend;