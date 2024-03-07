import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const {user,signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        form.reset()
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            navigate(from, { replace: true })
            console.log(loggedUser);
        })
        .catch(error=>{
           console.log(error);
        })
    }

    return (
        <form onSubmit={handleLogin} className='w-2/4 m-auto my-5 text-center mb-16'>
            <p className='text-center text-2xl  mt-5 '>Please Login</p>
            <div className='Control-form'>
                <p className='text-xl'>Email : </p>
                <input className='rounded w-3/4 p-2 bg-teal-100' type="email" name='email' placeholder='Your Email' />
            </div>
            <div className='Control-form'>
                <p className='text-xl'>PassWord: </p>
                <input className='rounded w-3/4 p-2 bg-teal-100' type="text" name='password' placeholder='Your password' />
            </div>
            <div className='Control-form'>
                <input className='text-white cursor-pointer font-bold my-2 rounded w-3/4 py-2 bg-teal-900' type="submit" value='Login' />
            </div>
            <p>Create an new account <Link to="/register"><span className='text-bold text-red'>Sign Up</span></Link></p>
        </form>
    );
};

export default Login;