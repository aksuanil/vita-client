import React, { useEffect, useState } from 'react'
import { Popover } from '@headlessui/react'
import { IoMdInformationCircle } from 'react-icons/io'
import { AiOutlineArrowRight } from 'react-icons/ai'

type Props = {
    handleChange: (event: any) => void,
    handleNext: (event: any) => void,
    inputs: any,
    bmiResult: any,
    targetWeightResult: any //TODO
}

function DietList1({ handleChange, inputs, bmiResult, targetWeightResult, handleNext }: Props) {
    return (
        <>
            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <form id="1" onSubmit={handleNext} className="flex flex-col items-center xl:px-12">
                        {/* <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M19 9.99999H20C20.2652 9.99999 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 9.99999 4 9.99999H5V8.99999C5 8.08074 5.18106 7.17049 5.53284 6.32121C5.88463 5.47193 6.40024 4.70026 7.05025 4.05025C7.70026 3.40023 8.47194 2.88462 9.32122 2.53284C10.1705 2.18105 11.0807 1.99999 12 1.99999C12.9193 1.99999 13.8295 2.18105 14.6788 2.53284C15.5281 2.88462 16.2997 3.40023 16.9497 4.05025C17.5998 4.70026 18.1154 5.47193 18.4672 6.32121C18.8189 7.17049 19 8.08074 19 8.99999V9.99999ZM17 9.99999V8.99999C17 7.67391 16.4732 6.40214 15.5355 5.46446C14.5979 4.52678 13.3261 3.99999 12 3.99999C10.6739 3.99999 9.40215 4.52678 8.46447 5.46446C7.52678 6.40214 7 7.67391 7 8.99999V9.99999H17ZM11 14V18H13V14H11Z"
                                            fill="#4B5563"
                                        />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-800 pl-3">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                            </div>
                            <button className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                                <svg aria-label="Close this banner" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8337 5.34166L14.6587 4.16666L10.0003 8.825L5.34199 4.16666L4.16699 5.34166L8.82533 10L4.16699 14.6583L5.34199 15.8333L10.0003 11.175L14.6587 15.8333L15.8337 14.6583L11.1753 10L15.8337 5.34166Z" fill="#79808F" />
                                </svg>
                            </button>
                        </div> */}
                        <div className="mt-16 flex flex-col lg:flex-row pb-16 gap-12 ">
                            <div>
                                <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div className='flex flex-col gap-12 font-bold '>
                                <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="firstName" >Age</label>
                                        <input key={1} id="age" required name='age' type="number" value={inputs.age || ''} onChange={handleChange} className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="Age" />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="firstName" >Gender</label>
                                        <select name="gender" onChange={handleChange} className='w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800' required>
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="firstName" >Physical Activity Level</label>
                                        <select name="physicalActivity" onChange={handleChange} className='w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800' required>
                                            <option value="">Please Select</option>
                                            <option value={0}>Sedentary - 1</option>
                                            <option value={1}>Lightly Active - 2</option>
                                            <option value={2}>Moderately Active - 3</option>
                                            <option value={3}>Active - 4</option>
                                            <option value={4}>Very Active - 5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="height" >Height</label>
                                        <input key={2} required name='height' maxLength={3} type="number" value={inputs.height || ''} onChange={handleChange} className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="Cm" min="1" max="250" />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="weight">Weight</label>
                                        <input key={3} required name='weight' type="number" value={inputs.weight || ''} onChange={handleChange} className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Kg" />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="bmi">Body Mass Index</label>
                                        <input key={4} type="number" value={bmiResult || ''} readOnly className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="bmi" placeholder="" />
                                    </div>
                                </div>
                                <div className='flex flex-col md:flex-row gap-5 md:gap-12'>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <div className="flex gap-2 align-bottom">
                                            <label className="flex gap-4 text-gray-800 underline underline-offset-2 decoration-themeGold" id="phone" >Desired Daily Calorie Intake </label>
                                            <div className="">
                                                <Popover className="">
                                                    <Popover.Button className={"flex"}>
                                                        <IoMdInformationCircle size={24} />
                                                    </Popover.Button>
                                                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-xl">
                                                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                                            <div className="bg-gray-50 p-4">

                                                                <span className="flex items-center">
                                                                    <span className="text-sm font-medium text-gray-700">
                                                                        Though it differs depending on age and activity level, adult males generally require 2,000-3000 calories per day to maintain weight while adult females need around 1,600-2,400 according to the U.S Department of Health. 8000 calories equals to 1 kilogram.
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </Popover.Panel>
                                                </Popover>
                                            </div>
                                        </div>
                                        <input key={5} required name='desiredCalorie' type="number" value={inputs.desiredCalorie || ''} onChange={handleChange} className="w-full p-2 mt-1  bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="desiredWeight" placeholder="Kcal" />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="desiredWeight" >Desired Weight</label>
                                        <input key={6} required name='desiredWeight' type="number" value={inputs.desiredWeight || ''} onChange={handleChange} className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="desiredWeight" placeholder="Kg" />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="days" >Approximate days until desired weight</label>
                                        <input key={7} name='approxDays' type="number" value={targetWeightResult || ''} readOnly className="w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800" aria-labelledby="approxDays" />
                                    </div>
                                    <div hidden>
                                        <label className="" id="section" >section</label>
                                        <input key={8} name='section' type="number" value={1} readOnly aria-labelledby="section" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input type="submit" id="submit-form" className="hidden" />
                    </form>
                </div>
            </div >
        </>)
}

export { DietList1 }