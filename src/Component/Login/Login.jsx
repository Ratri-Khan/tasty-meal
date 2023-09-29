import React from 'react';

const Login = () => {
    return (
        <div>
            <p className='text-center text-2xl  mt-5'>Please Login</p>
            <form className='w-2/4 m-auto border-2 text-center'>
            <div className='Control-form'>
                <p className='text-xl'>Email : </p>
                <input className='border-2 rounded-xl w-3/4 py-1 bg-teal-100' type="email" name='email' placeholder='Your Email' />
            </div>
            <div className='Control-form'>
                <p className='text-xl'>PassWord: </p>
                <input className='border-2 rounded-xl w-3/4 py-1 bg-teal-100' type="text" name='password' placeholder='Your password' />
            </div>
            <div className='Control-form'>
                <input className='text-white font-bold my-2 border-2 rounded-xl w-1/4 py-2 bg-teal-800' type="submit" value='Login' />
            </div>


        </form>
        </div>
    );
};

export default Login;