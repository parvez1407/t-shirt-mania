import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = ({ house }) => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h4>Uncle</h4>
            <p>House: {house}</p>
            <p>Money: {money}</p>
        </div>
    );
};

export default Uncle;