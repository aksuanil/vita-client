import React, { useState, useEffect } from 'react'
import { calcBmi, calcDailyCalNeed, calcTargetWeightDays } from './DietForm1Helper'
import type { Inputs, BmiInputs, DesiredWeightInputs } from '../types'
import { DietList1 } from '../../../components/DietList';

type Props = {
    formData: any,
    setFormData: React.Dispatch<React.SetStateAction<Inputs>>
}

export default function DietForm1({ formData, setFormData }: Props) {

    // const retrievedObject = JSON.parse(localStorage.getItem('inputs')!)

    // useEffect(() => {
    //     setInputs(retrievedObject)
    // }, []);

    // const [inputs, setInputs] = useState<Inputs>({
    //     gender: "",
    //     age: 0,
    //     height: 0,
    //     weight: 0,
    //     desiredCalorie: 0,
    //     desiredWeight: 0,
    //     physicalActivity: 0
    // });
    
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
        <DietList1 handleChange={handleChange} inputs={formData} bmiResult={bmiResult} targetWeightResult={targetWeightResult} handleNext={handleNext} />
    )
}
