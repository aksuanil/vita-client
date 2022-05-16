import React, { useState } from 'react'
import logo from '../assets/img/logo.png'
import LogIn from './LogIn';

type Props = {}

export default function Header({ }: Props) {
    const [show, setShow] = useState(false);
    const [showPopup, setPopup] = useState(false);
    const togglePopup = () => {
        setPopup(true);
        setTimeout(() => {
            setPopup(false) 
        }, 200);
    };

    return (
        <div className=" mx-auto z-20 sticky top-0">
            <nav className="w-full px-14 absolute bg-opacity-80 backdrop-blur-sm bg-themeGreen ">
                <div className="hidden lg:flex w-full f-f-p justify-between items-center py-4 relative ">
                    <div className="flex w-2/5 items-center gap-6 text-2xl font-bold text-white">
                        <img className='w-14 h-14' src={logo} />
                        <div>Vita</div>
                    </div>
                    <div className="flex justify-evenly md:w-4/6 lg:w-4/6 xl:w-3/6">
                        <ul className="flex justify-between w-full items-center font-semibold text-lg text-gray-200 tracking-wide">
                            <li className="border-b-4 border-emerald-700 pb-1">
                                <a href="#">Home</a>
                            </li>
                            <li className="border-b-4 border-transparent pb-1">
                                <a href="#">Stats</a>
                            </li>
                            <li className="border-b-4 border-transparent pb-1">
                                <a href="#">Blog</a>
                            </li>
                            <button className="flex border-b-4 border-transparent gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                <div className='font-semibold'>EN</div>
                            </button>
                        </ul>
                        <div className='border-r-[3px] border-green-800 lg:pl-8 lg:mr-8 xl:pl-16 xl:mr-16'></div>
                        <ul className='flex mb-2 justify-end gap-8 items-center text-lg text-gray-200 whitespace-nowrap'>
                            <button className="relative group font-semibold ">
                                <a href="signup">
                                    <span className='p-2 px-4 border-2 border-x-transparent border-t-transparent border-emerald-900 rounded-md '>Sign up</span>
                                    <span className="absolute left-0 -bottom-[7px] rounded-b-sm w-full h-[0.00001px] bg-emerald-700 -z-10 duration-500 group-hover:duration-500 group-hover:h-9"></span>
                                </a>
                            </button>
                            <button onClick={() => togglePopup()} className="relative group font-semibold ">
                                <span className='p-2 px-4 border-2 border-x-transparent border-t-transparent border-emerald-900 rounded-md '>Log In</span>
                                <span className="absolute left-0 -bottom-[7px] rounded-b-sm w-full h-[0.00001px] bg-emerald-700 -z-10 duration-500 group-hover:duration-500 group-hover:h-9"></span>
                            </button>
                            <LogIn showPopup = {showPopup} />
                        </ul>
                    </div>
                </div>
            </nav>
            <nav className="lg:hidden">
                <div className="flex py-3 justify-between items-center px-4 w-full absolute bg-opacity-80 backdrop-blur-sm bg-themeGreen ">
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
                                    <svg aria-label="Close" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <line x1={18} y1={6} x2={6} y2={18} />
                                        <line x1={6} y1={6} x2={18} y2={18} />
                                    </svg>
                                </div>
                            ) : (
                                <svg id="open" aria-haspopup="true" aria-label="Main Menu" xmlns="http://www.w3.org/2000/svg" className="show-m-menu icon icon-tabler icon-tabler-menu" width={28} height={28} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
    )
}