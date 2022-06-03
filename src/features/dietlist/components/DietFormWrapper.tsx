import React, { useState } from 'react'
import DietList1 from './DietForm1'
import DietForm2 from './DietForm2'
import DietFormResult from './DietFormResult'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Inputs } from '../types'

type Props = {
    // section: string;
}

export default function DietFormWrapper({ }: Props) {
    // const [page, setPage] = useState(0);
    const [inputs, setInputs] = useState<Inputs>({
        gender: "",
        age: 0,
        height: 0,
        weight: 0,
        desiredCalorie: 0,
        desiredWeight: 0,
        approxDays: 0,
        bmiResult: 0,
        physicalActivity: 0
    });
    console.log(inputs)
    const [section, setSection] = useState(1);
    const [isValid, setValid] = useState(false);

    const updateIsValid = (bool: boolean) => {
        setValid(bool);
    }
    const FormTitles = ["Sign Up", "Personal Info", "Other"];

    const PageDisplay = () => {
        if (section === 1) {
            return <DietList1 formData={inputs} setFormData={setInputs} />;
        } else if (section === 2) {
            return <DietForm2 />;
        } else {
            return <DietFormResult />;
        }
    };

    console.log(isValid)
    const increaseSection = (val: number) => {
        // if (isValid) {
        setSection(val + 1);
        // }
    }
    const descreaseSection = (val: number) => {
        setSection(val - 1);
    }

    return (
        <div className='min-h-screen pt-14 lg:pt-24'>
            <div className="bg-gray-100 py-6 flex flex-wrap items-center justify-center gap-4 ">
                <button onClick={() => setSection(1)} className={`transition text-left w-52 h-16 relative md:mt-0 mt-4 rounded-l-sm rounded-r-3xl border-themeGreenLight ${section === 1 ? "bg-themeGreenLight hover:bg-[#3f8f36] text-white" : "bg-white hover:bg-[#49d13d48] "}`}>
                    <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p className="w-full text-sm font-medium leading-4">Basic Information</p>
                        <p className="w-full text-xs mt-1 leading-none ">Basic informations</p>
                    </div>
                </button>
                <button onClick={() => setSection(2)} className={`transition text-left w-52 h-16 relative md:mt-0 mt-4 border-2 rounded-l-sm rounded-r-3xl border-themeGreenLight ${section === 2 ? "bg-themeGreenLight hover:bg-[#3f8f36] text-white" : "bg-white hover:bg-[#49d13d48] "}`}>
                    <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p className="w-full text-sm font-medium leading-4 ">Food Preferences</p>
                        <p className="w-full text-xs mt-1 leading-none">Your specific food preferences</p>
                    </div>
                </button>
                <button onClick={() => setSection(3)} className={`transition text-left w-52 h-16 relative lg:mt-0 mt-4  border-2 rounded-l-sm rounded-r-3xl border-themeGreenLight ${section === 3 ? "bg-themeGreenLight hover:bg-[#3f8f36] text-white" : "bg-white hover:bg-[#49d13d48] "}`}>
                    <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                        <p className="w-full text-sm font-medium leading-4">Your Diet List</p>
                        <p className="w-full text-xs mt-1 leading-none">Resources to begin</p>
                    </div>
                </button>
            </div>

            {PageDisplay()}

            <div className='flex justify-center gap-8'>
                {section !== 1 &&
                    <button onClick={() => descreaseSection(section)} className="relative px-5 py-2 font-medium text-white group w-fit">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-themeGreenLight group-hover:bg-themeGreenDark group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-themeGreenDark group-hover:bg-themeGreenLight group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-themeGreenDark -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-themeGreenLight -rotate-12"></span>
                        <span className="relative flex gap-2"><AiOutlineArrowLeft size={24} /> Back </span>
                    </button>
                }
                <div className=' border-r-2 border-gray-300'></div>
                {section !== 3 &&
                    <button type="submit" form={`${section}`} onClick={() => increaseSection(section)} className="relative px-5 py-2 font-medium text-white group w-fit">
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-themeGreenLight group-hover:bg-themeGreenDark group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-themeGreenDark group-hover:bg-themeGreenLight group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-themeGreenDark -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-themeGreenLight -rotate-12"></span>
                        <span className="relative flex gap-2">Next<AiOutlineArrowRight size={24} /> </span>
                    </button>
                }
            </div>
        </div>
    )
}