import React, { useState } from "react";
import Image from 'next/image';
import { useRouter } from 'next/router';
import Logo from '../public/logo.png';
import Mail from '../public/mail.png';
import Padlock from '../public/padlock.png';
import Coffee from '../public/fall.png';

const SignUp = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (!email || !password || !confirmPassword) {
            setErrorMessage("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        // Clear any previous error message and navigate to sign-in
        setErrorMessage("");
        router.push('./signIn');
    };

    return (
        <div className="flex h-screen">
            <div className="flex flex-col items-center justify-center w-1/2 h-full bg-[#D3B38D]">
                <div className="relative mt-[55px] bg-orange-200 rounded-md shadow-2xl p-7 w-[380px] h-[440px] max-w-md">
                    <Image
                        src={Logo}
                        alt="Logo"
                        width={150}
                        height={100}
                        className="absolute top-[-75px] left-1/2 transform -translate-x-1/2"
                    />

                    <form onSubmit={handleSubmit}>
                        <div className="relative mb-8 mt-[45px]">
                            <div className="relative">
                                <input 
                                    type="email" 
                                    id="email"
                                    required
                                    autoComplete="off"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-5 p-2 pl-8 border-b border-orange-950 bg-orange-200 focus:outline-none focus:border-orange-400 peer"
                                />
                                <label 
                                    htmlFor="email"
                                    className={`absolute mt-5 left-8 top-2 text-orange-950 transition-all duration-300 transform 
                                                ${email ? "-translate-y-5 text-xs" : "translate-y-1 text-base"}
                                                peer-focus:-translate-y-5 peer-focus:text-xs`}
                                >
                                    Email
                                </label>
                                <Image 
                                    src={Mail} 
                                    alt="Mail Icon" 
                                    width={20} 
                                    height={20} 
                                    className="absolute left-2 top-8"
                                />
                            </div>
                        </div>

                        <div className="relative mb-8">
                            <div className="relative">
                                <input 
                                    type="password" 
                                    id="password"
                                    required
                                    autoComplete="off"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 pl-8 border-b border-orange-950 bg-orange-200 focus:outline-none focus:border-orange-400 peer"
                                />
                                <label 
                                    htmlFor="password"
                                    className={`absolute left-7 top-2 text-orange-950 transition-all duration-300 transform 
                                                ${password ? "-translate-y-5 text-xs" : "translate-y-1 text-base"}
                                                peer-focus:-translate-y-5 peer-focus:text-xs`}
                                >
                                    Password
                                </label>
                                <Image 
                                    src={Padlock} 
                                    alt="Padlock Icon" 
                                    width={20} 
                                    height={20} 
                                    className="absolute left-2 top-3"
                                />
                            </div>
                        </div>

                        <div className="relative mb-5">
                            <div className="relative">
                                <input 
                                    type="password" 
                                    id="confirmPassword"
                                    required
                                    autoComplete="off"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full p-2 pl-8 border-b border-orange-950 bg-orange-200 focus:outline-none focus:border-orange-400 peer"
                                />
                                <label 
                                    htmlFor="confirmPassword"
                                    className={`absolute left-7 top-2 text-orange-950 transition-all duration-300 transform 
                                                ${confirmPassword ? "-translate-y-5 text-xs" : "translate-y-1 text-base"}
                                                peer-focus:-translate-y-5 peer-focus:text-xs`}
                                >
                                    Confirm Password
                                </label>
                                <Image 
                                    src={Padlock} 
                                    alt="Padlock Icon" 
                                    width={20} 
                                    height={20} 
                                    className="absolute left-2 top-3"
                                />
                            </div>
                            {errorMessage && (
                                <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
                            )}
                        </div>

                        <div className="flex justify-center">
                            <button 
                                type="submit" 
                                className="w-[300px] bg-orange-800 text-white font-bold py-2 rounded hover:bg-orange-700 transform hover:scale-105 active:scale-95 transition active:bg-orange-950"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                    
                    <div className="mt-4 text-center">
                        <p className="text-sm text-black">
                            Already have an account?{' '}
                            <button
                                onClick={() => router.push('./signIn')}
                                className="text-orange-700 hover:underline cursor-pointer"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center w-1/2 h-full bg-[#D3B38D]">
                <Image
                    src={Coffee}
                    alt="Coffee"
                    width={900}
                    height={500}
                    className="object-contain -ml-20"
                />
            </div>
        </div>
    );
};

export default SignUp;
