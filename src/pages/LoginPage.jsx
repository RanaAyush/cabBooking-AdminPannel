import React, { useState } from 'react';
import carImage from '../assets/car.png'
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        const isLoginSuccessful = true;

        if (isLoginSuccessful) {
            navigate('/dashboard');
        } else {
            alert("Login failed. Please check your credentials.");
        }

    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#f7f9ff]">
            <div className="bg-white p-4 rounded-lg shadow-lg w-[470px] h-[450px] flex items-center flex-col">
                <div className='text-center text-2xl mb-2 max-w-20 rounded-full border-2 border-black p-1'><img src={carImage} alt="" /></div>
                <form onSubmit={handleSignup} className="w-full">
                    <h2 className="text-3xl font-semibold mb-2 text-center">Admin Sign In</h2>
                    <p className='text-center mb-6'>To Keep connected please login with your personal info.</p>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border rounded mb-4"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-4 py-3 border rounded mb-6"
                    />
                    <div className='flex items-center justify-between mb-4'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="remember" id="remember" className='w-5 h-5' />
                            <label htmlFor="remember" className='pb-1'> Remember Me</label>
                        </div>
                        <div className='pr-2 text-blue-500'>
                            <a href="/">Forget Password?</a>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
