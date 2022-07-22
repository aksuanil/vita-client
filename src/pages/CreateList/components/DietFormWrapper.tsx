import React, { useState } from 'react'
import DietForm1 from './DietForm1'
import DietForm2 from './DietForm2'
import DietFormResult from './DietFormResult'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import { Inputs } from '../types'
import { Step, StepConnector, stepConnectorClasses, StepIconProps, StepLabel, Stepper, styled } from '@mui/material'
import { Check } from '@mui/icons-material'
import Steps from '../../../components/Elements/Stepper/Steps'

const pageArr = [1, 2]

type Props = {
    // section: string;
}

export default function DietFormWrapper({ }: Props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set<number>());
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
            return <DietForm1 formData={inputs} setFormData={setInputs} />;
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

    const isStepOptional = (step: number) => {
        return step === 1;
    };

    const isStepSkipped = (step: number) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };    
    
    const handleSubmit = () => {
        console.log("submit")
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const steps = ['Basic Information', 'Food Preferences', 'Food Preferences', 'Your Diet List'];

    return (
        <div className='min-h-screen pt-14 lg:pt-32'>
            <Steps steps={steps} activeStep={activeStep} isStepSkipped={isStepSkipped} isStepOptional={isStepOptional} ></Steps>

            {PageDisplay()}

            <div className='flex justify-center gap-8'>
                <button disabled={activeStep === 0} onClick={handleBack} className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 disabled:bg-white disabled:text-gray-400 disabled:border-green-300 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                    <svg transform="scale(-1,1)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                    </svg>
                    <span className="ml-2">Back</span>
                </button>
                <div className=' border-r-2 border-gray-300'></div>
                {activeStep !== steps.length - 1 &&
                    <button type="submit" form={`${section}`} onClick={handleNext} className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mr-2">Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                }
                {activeStep === steps.length - 1 &&
                    <button type="submit" form={`${section}`} onClick={handleSubmit} className="bg-white text-gray-800 font-bold rounded border-b-2 border-green-500 hover:border-green-600 hover:bg-green-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                        <span className="mr-2">Submit</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="currentcolor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                        </svg>
                    </button>
                }
            </div>
        </div>
    )
}