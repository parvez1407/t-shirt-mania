import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h5>Sister</h5>
            <p>House: {house}</p>
            <p>Money: {money}</p>
            <button onClick={() => setMoney(money + 1000)} className='bg-orange-700 px-4 py-2 mt-3 rounded-lg'>Add 1000</button>
        </div>
    );
};

export default Sister;