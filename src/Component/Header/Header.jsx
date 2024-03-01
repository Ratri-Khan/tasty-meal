import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../assets/logo.png'

const Header = () => {
    const { user ,logout} = useContext(AuthContext);
    console.log(user);
    const handleLogout = () =>{
         logout()
         .then(()=>{})
         .then(error =>{console.log(error)})
    }
    return (
        <div className='justify-between px-14 bg-teal-800 py-1 items-center text-white font-bold'>
            <img src={logo} alt="" />
            <ul className='flex items-center'>
                <li className='pr-7'><Link to='/'>Home</Link></li>
                <li>
                {
                    user ?
                        <div className='flex items-center'>
                        <img src={user.photoURL} className='w-14 h-14 rounded-full' alt="" />
                           <p className='cursor-pointer ml-7 border-2 rounded py-2 px-3' onClick={handleLogout}>logout</p>
                           
                        </div> :
                        <div>
                            <Link to='/register'className='pr-7'>Register</Link>
                            <Link to='/login'>Login</Link>
                        </div>
                }
                </li>
            </ul>
        </div>
    );
};

export default Header;