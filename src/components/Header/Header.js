import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='bg-orange-800 py-3 text-right pr-52'>
            <Link className='ml-6 text-lg font-light text-white' to='/home'>Home</Link>
            <Link className='ml-6 text-lg font-light text-white' to='/orders'>Orders</Link>
            <Link className='ml-6 text-lg font-light text-white' to='/grandpa'>Grandpa</Link>
            <Link className='ml-6 text-lg font-light text-white' to='/about'>About</Link>
        </nav>
    );
};

export default Header;