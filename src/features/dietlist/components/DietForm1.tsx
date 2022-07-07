import React, { useState, useEffect } from 'react'
import { calcBmi, calcDailyCalNeed, calcTargetWeightDays } from './DietForm1Helper'
import type { Inputs, BmiInputs, DesiredWeightInputs } from '../types'
import { DietFormPage1 } from '../../../components/DietListForm';

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
        <DietFormPage1 handleChange={handleChange} inputs={formData} bmiResult={bmiResult} targetWeightResult={targetWeightResult} handleNext={handleNext} />
    )
}
