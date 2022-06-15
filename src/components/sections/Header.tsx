import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../../App';
import logo from '../../assets/img/logo.png'
import LogIn from './LogIn';
import { useAuth } from '../../context/AuthContext';
import { useEffect } from 'react';

type Props = {
    isUserLogin: Promise<boolean>
}

export default function Header({ isUserLogin }: Props) {
    const { logout } = useAuth();
    const [IsLogin, setIsLogin] = useState(false);

    useEffect(() => {
        isUserLogin.then((res) => {
            setIsLogin(res);
        })
    })

    const [show, setShow] = useState(false);
    const [showPopup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false)
        }, 200);
    };

    document.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            document.getElementById("header")!.style.height = "4.5rem";
        } else {
            document.getElementById("header")!.style.height = "5.5rem";
        }
    }
    return (
        <>
            <div className=" mx-auto z-40 sticky top-0">
                <nav className="w-full px-14 absolute bg-opacity-90 shadow-md shadow-gray-500 backdrop-blur-sm bg-[#096637] ">
                    <div id='header' className="hidden lg:h-[5.5rem] transition-all duration-500 lg:flex w-full justify-between items-center py-5 relative ">
                        <NavLink to="/" className="flex w-2/6 xl:w-2/5 items-center gap-6 text-[32px] font-bold text-white font-Spectral">
                            <img className='w-12 h-12' src={logo} />
                            <div>Vita</div>
                        </NavLink>
                        <div className="flex justify-evenly md:w-4/6 lg:w-full xl:w-full 2xl:w-4/6 font-Spectral font-bold">
                            <div className="flex justify-between w-full items-center text-themeGold tracking-widest text-sm xl:text-[17px]">
                                <NavLink to="/" className={({ isActive }) =>
                                    "" + (isActive ? " border-b-[3px] border-themeGoldLight pb-1" : "relative group pb-1")
                                } >Home
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                </NavLink>
                                <NavLink to="/createlist" className={({ isActive }) =>
                                    "" + (isActive ? " border-b-[3px] border-themeGoldLight pb-1" : "relative group pb-1")
                                } ><div className='whitespace-nowrap'>Create List</div>
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                </NavLink>
                                <NavLink to="/blog" className={({ isActive }) =>
                                    "" + (isActive ? " border-b-[3px] border-themeGoldLight pb-1" : "relative group pb-1")
                                } >Blog
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                </NavLink>
                                <NavLink to="/pricing" className={({ isActive }) =>
                                    "" + (isActive ? " border-b-[3px] border-themeGoldLight pb-1" : "relative group pb-1")
                                } >Pricing
                                    <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                    <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                </NavLink>
                                <button className="flex border-b-4 border-transparent gap-2 items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                    </svg>
                                    <div className='font-semibold relative group'>EN
                                        <span className="absolute -bottom-1 left-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                        <span className="absolute -bottom-1 right-1/2 w-0 h-[3px] duration-200 group-hover:duration-200 bg-themeGoldLight group-hover:w-1/2 group-hover:transition-all"></span>
                                    </div>
                                </button>
                            </div>
                            <div className='border-r-[3px] border-[#c5901ca2] h-12 lg:pl-8 lg:mr-8 xl:pl-16 xl:mr-16'></div>
                            <ul className='flex mb-2 justify-end gap-8 items-center text-[21px] font-Spectral text-gray-200 whitespace-nowrap'>
                                {!IsLogin ?
                                    <>
                                        <button onClick={() => togglePopup()} className="relative group font-semibold ">
                                            <span className='p-2 px-4 hover:text-[#09664a]'>Log In</span>
                                            <span className="absolute left-0 -bottom-[7px] rounded-b-md w-full h-1 bg-[#c58f1c] -z-10 duration-500 group-hover:duration-500 group-hover:h-11"></span>
                                        </button>
                                        <LogIn showPopup={showPopup} />
                                        <button className="relative group font-semibold ">
                                            <NavLink to="/signup" className={({ isActive }) =>
                                                "" + (isActive ? "bg-[#c58f1c] pb-2 rounded-b-sm text-[#09664a]" : "")
                                            } >
                                                <span className='p-2 px-4 hover:text-[#09664a]'>Join Now</span>
                                                <span className="absolute left-0 -bottom-[7px] rounded-b-md w-full h-1 bg-[#c58f1c] -z-10 duration-500 group-hover:duration-500 group-hover:h-11"></span>
                                            </NavLink>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <button className="relative group font-semibold ">
                                            <NavLink to="/profile" className={({ isActive }) =>
                                                "" + (isActive ? "bg-[#c58f1c] pb-2 rounded-b-sm text-[#09664a]" : "")
                                            } >
                                                <span className='p-2 px-4 hover:text-[#09664a]'>Profile</span>
                                                <span className="absolute left-0 -bottom-[7px] rounded-b-md w-full h-1 bg-[#c58f1c] -z-10 duration-500 group-hover:duration-500 group-hover:h-11"></span>
                                            </NavLink>
                                        </button>
                                        <button onClick={() => logout()} className="relative group font-semibold ">
                                            <div>
                                                <span className='p-2 px-4 hover:text-[#09664a]'>Log out</span>
                                                <span className="absolute left-0 -bottom-[7px] rounded-b-md w-full h-1 bg-[#c58f1c] -z-10 duration-500 group-hover:duration-500 group-hover:h-11"></span>
                                            </div>
                                        </button>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
                <nav className="lg:hidden">
                    <div className="flex py-3 justify-between items-center px-4 w-full absolute bg-opacity-80 backdrop-blur-sm bg-[#096637] ">
                        <div>
                            <div className="flex w-2/5 items-center gap-6 text-2xl font-bold text-white">
                                <img className='w-12 h-12' src={logo} />
                                <div>Vita</div>
                            </div>
                        </div>
                        <div className=" flex items-center">
                            {show && (
                                <ul id="list" className=" p-2 border-r bg-white absolute rounded top-0 left-0 right-0 shadow mt-16 md:mt-16">
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Home</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">Stats</span>
                                        </a>
                                    </li>
                                    <li className="flex cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700  items-center focus:text-indigo-700 focus:outline-none">
                                        <a href="javascript:void(0)">
                                            <span className="ml-2 font-bold">About Us</span>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center">
                                        <a href="javascript:void(0)">
                                            <a className="ml-2 font-bold" href='/signup'>Sign Up</a>
                                        </a>
                                    </li>
                                    <li className="flex flex-col cursor-pointer text-gray-600 text-sm leading-3 tracking-normal pt-2 pb-4 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none  justify-center">
                                        <a href="javascript:void(0)">
                                            <span onClick={() => togglePopup()} className="ml-2 font-bold">Log In</span>
                                        </a>
                                    </li>
                                </ul>
                            )}
                            <div className="xl:hidden" onClick={() => setShow(!show)}>
                                {show ? (
                                    <div id="close" className=" close-m-menu">
                                        <svg className='stroke-themeGold' aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" />
                                            <line x1={18} y1={6} x2={6} y2={18} />
                                            <line x1={6} y1={6} x2={18} y2={18} />
                                        </svg>
                                    </div>
                                ) : (
                                    <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu stroke-themeGold" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={4} y1={8} x2={20} y2={8} />
                                        <line x1={4} y1={16} x2={20} y2={16} />
                                    </svg>
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
};