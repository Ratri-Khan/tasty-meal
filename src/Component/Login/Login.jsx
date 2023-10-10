import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

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
        <form onSubmit={handleLogin} className='w-2/4 m-auto my-5 border-2 text-center'>
            <p className='text-center text-2xl  mt-5 '>Please Login</p>
            <div className='Control-form'>
                <p className='text-xl'>Email : </p>
                <input className='border-2 rounded-xl w-3/4 py-1 bg-teal-100' type="email" name='email' placeholder='Your Email' />
            </div>
            <div className='Control-form'>
                <p className='text-xl'>PassWord: </p>
                <input className='border-2 rounded-xl w-3/4 py-1 bg-teal-100' type="text" name='password' placeholder='Your password' />
            </div>
            <div className='Control-form'>
                <input className='text-white cursor-pointer font-bold my-2 border-2 rounded-xl w-1/4 py-2 bg-teal-800' type="submit" value='Login' />
            </div>
        </form>
    );
};

export default Login;