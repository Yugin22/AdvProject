import React, { useState } from "react"
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.png'
import { FaBars, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { FaX } from "react-icons/fa6";



const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

  return (
    
    <nav className="fixed w-full h-20 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
            <div className="hidden sm:flex">
                <ul>
                    <Link href="/home">
                        <li className="ml-10 uppercase hover-border-b text-md">Home</li>
                    </Link>
                    <Link href="/store">
                        <li className="ml-10 uppercase hover-border-b text-md">Store</li>
                    </Link>
                </ul>
            </div>
            <Image 
                src={Logo}
                alt="Logo"
                width={70}      
                height={100}     
                className=""
                priority
            />
            <div className="hidden sm:flex">
                <ul>
                    <Link href="/contacts">
                        <li className="ml-10 uppercase hover-border-b text-md">Contacts</li>
                    </Link>
                    <Link href="/about">
                        <li className="ml-10 uppercase hover-border-b text-md">About</li>
                    </Link>
                </ul>
            </div>
            <div
            onClick={handleNav} 
            className="sm:hidden cursor-pointer pl-24">
                <FaBars size={25} />
            </div>
        </div>
        <div className={
            menuOpen 
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
        >
        <div className="flex w-full items-center justify-end">
            <div onClick={handleNav} className="cursor-pointer">
                <FaX size={25} />
            </div>
        </div>
        <div className="flex-col py-4">
            <ul>
                <Link href="/home">
                <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                    Home
                </li>
                </Link>
                <Link href="/store">
                <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                    Store
                </li>
                </Link>
                <Link href="/contacts">
                <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                    Contacts
                </li>
                </Link>
                <Link href="/about">
                <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
                >
                    About
                </li>
                </Link>
            </ul>
        </div> 
        <div className="flex flex-row justify-around pt-10 items-center">
            <FaInstagram size={30} className="cursor-pointer" />
            <FaFacebook size={30} className="cursor-pointer" />
            <FaTwitter size={30} className="cursor-pointer" />
        </div>
        </div>
    </nav>

  )
}

export default NavBar
