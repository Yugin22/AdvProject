import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useMyContext } from '../components/myContext';
import Lcover from '../public/logincover.png';
import Logo from '../public/logo.png';
import Eye from '../public/eye.png';
import Hide from '../public/hide.png';

const SignIn = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    
    const contextValue = useMyContext(); // Access context value

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const handleSignUp = () => {
        router.push('/signUp');
    };

    const handleWaytoHome = () => {


        if (!email || !password) {
            alert("Please fill in all fields.");
            return;
        }

        console.log("Using context value:", contextValue); // Optional usage

        router.push('/homePage');
    };

    return (
        <div className="flex h-screen">
            {/* Image section */}
            <div className="relative w-1/2 h-full bg-[#D3B38D]">
                <Image 
                    src={Lcover} 
                    alt="Login Cover" 
                    layout="fill"
                    objectFit="cover"
                    className="absolute"
                />
            </div>
            
            {/* Sign-in form section */}
            <div className="flex flex-col items-center justify-center w-1/2 h-full p-8 bg-[#D3B38D]">
                <div className="relative mt-[55px] bg-orange-200 rounded-md shadow-2xl p-7 w-[355px] h-[355px] max-w-md">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={150}
                        height={100}
                        className="absolute top-[-75px] left-1/2 transform -translate-x-1/2"
                    />

                    <form onSubmit={handleWaytoHome}>
                        <div className="relative mb-8 mt-[45px]">
                            <input 
                                type="email"
                                id="email"
                                required
                                autoComplete="off"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-5 p-2 border-b border-orange-950 bg-orange-200 focus:outline-none focus:border-orange-400 peer"
                            />
                            <label 
                                htmlFor="email"
                                className={`absolute mt-5 left-0 text-orange-950 transition-all duration-300 transform 
                                            ${email ? "-translate-y-3 text-xs" : "translate-y-3 text-base"}
                                            peer-focus:-translate-y-3 peer-focus:text-xs`}
                            >
                                Email
                            </label>
                        </div>
                        
                        <div className="relative mb-5">
                            <input 
                                type={showPassword ? "text" : "password"}
                                id="password"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border-b border-orange-950 bg-orange-200 focus:outline-none focus:border-orange-400 peer"
                            />
                            <label 
                                htmlFor="password"
                                className={`absolute left-0 text-orange-950 transition-all duration-300 transform 
                                            ${password ? "-translate-y-3 text-xs" : "translate-y-3 text-base"}
                                            peer-focus:-translate-y-3 peer-focus:text-xs`}
                            >
                                Password
                            </label>
                            <div 
                                onClick={togglePasswordVisibility}
                                className="absolute top-[10px] right-3 cursor-pointer"
                            >
                                <Image 
                                    src={showPassword ? Eye : Hide}
                                    alt={showPassword ? "Hide password" : "Show password"}
                                    width={20}
                                    height={20}
                                />
                            </div>
                        </div>
                        
                        <div className="flex justify-center">
                            <button 
                                type="submit"
                                className="w-[280px] bg-orange-800 text-white font-bold py-2 rounded hover:bg-orange-700 transform hover:scale-105 active:scale-95 transition active:bg-orange-950"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-center">
                        <p className="text-sm text-black">
                            Don't have an account?{' '}
                            <button 
                                onClick={handleSignUp}
                                className="text-orange-700 hover:underline cursor-pointer"
                            >
                                Sign Up
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
