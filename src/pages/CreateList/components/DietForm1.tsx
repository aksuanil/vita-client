import React, { useState, useEffect } from 'react'
import { calcBmi, calcDailyCalNeed, calcTargetWeightDays } from '../CreateListHelper'
import type { Inputs, BmiInputs, DesiredWeightInputs } from '../types'
import { Popover } from '@headlessui/react'
import { IoMdInformationCircle } from 'react-icons/io'
import { SelectField } from '../../../components/Elements/SelectField/SelectField'
import { InputField } from '../../../components/Elements/InputField/InputField'

type Props = {
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<Inputs>>
}

export default function DietForm1({ formData, setFormData }: Props) {

    const [bmiInputs, setBmiInputs] = useState<BmiInputs>({
        height: 0,
        weight: 0,
    })
    const [targetWeightInputs, setTargetWeightInputs] = useState<DesiredWeightInputs>({
        desiredCalorie: 0,
        desiredWeight: 0,
        weight: 0
    })
    const [bmiResult, setBmiResult] = useState(0)
    const [targetWeightResult, setTargetWeightResult] = useState(0)

    useEffect(() => {
        setTargetWeightResult(calcTargetWeightDays(formData, targetWeightInputs, calcDailyCalNeed(formData)));
    }, [formData])

    useEffect(() => {
        setBmiResult(calcBmi(bmiInputs));
    }, [bmiInputs])

    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        if (name === 'height' || name === 'weight') {
            setBmiInputs(bmiValues => ({ ...bmiValues, [name]: value }))
        }
        if (name === 'desiredCalorie' || name === 'desiredWeight' || name === 'weight') {
            setTargetWeightInputs(targetValues => ({ ...targetValues, [name]: value }))
        }
        setFormData(values => ({ ...values, [name]: value }))
    }

    const handleNext = (event: any) => {
        try {
            event.preventDefault();
            const formDatas = new FormData(event.target);
            let basicInfoObject: any = {};
            // localStorage.setItem('inputs', JSON.stringify(formData));
        } catch (error) {

        }
    }
    return (
        <>
            <div className="flex items-center justify-center" >
                <div className="xl:w-10/12 w-full px-8">
                    <form id="1" onSubmit={handleNext} className="flex flex-col items-center xl:px-12">
                        <div className="mt-16 flex flex-col lg:flex-row pb-16 gap-12 ">
                            <div>
                                <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                                <p className="mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                            </div>
                            <div className='flex flex-col gap-12 font-bold '>
                                <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold">Age</label>
                                        <InputField name='age' type='number' placeholder='Age' value={formData.age} onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold">Gender</label>
                                        <SelectField
                                            options={["Gender", "Male", "Female"].map((type, index) => ({
                                                label: type,
                                                value: index,
                                            }))}
                                        />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold">Physical Activity Level</label>
                                        <SelectField
                                            options={["Please Select", "Sedentary - 1", "Lightly Active - 2", "Moderately Active - 3", "Active - 4", "Very Active - 5"].map((type, index) => ({
                                                label: type,
                                                value: index,
                                            }))}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 md:gap-12">
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="height" >Height</label>
                                        <InputField type='number' name='height' placeholder='Height' value={formData.height} onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="weight">Weight</label>
                                        <InputField type='number' name='weight' placeholder='Weight' value={formData.weight} onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="bmi">Body Mass Index</label>
                                        <InputField type='number' placeholder='BMI' value={bmiResult} />
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
                                        <InputField type='number' name='desiredCalorie' placeholder='Daily Calorie Intake' value={formData.desiredCalorie} onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="desiredWeight" >Desired Weight</label>
                                        <InputField type='number' name='desiredWeight' placeholder='Desired Weight' value={formData.desiredWeight} onChange={handleChange} />
                                    </div>
                                    <div className="flex flex-col justify-end md:w-1/3">
                                        <label className="leading-none text-gray-800 underline underline-offset-2 decoration-themeGold" id="days" >Approximate days until desired weight</label>
                                        <InputField type='number' placeholder='Appoximate Days' value={targetWeightResult} onChange={handleChange} />
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
        </>
    )
}
