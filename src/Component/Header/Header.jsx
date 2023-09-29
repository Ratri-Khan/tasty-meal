import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex justify-between px-14 bg-teal-800 py-3 items-center text-white font-bold'>
            <p className='text-2xl'>Tasty-Meal</p>
            <ul className='flex'>
                <li className='pr-7'><Link to='/'>Home</Link></li>
                <li className='pr-7'><Link to='/register'>Register</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    );
};

export default Header;