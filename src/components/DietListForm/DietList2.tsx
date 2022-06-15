import React from 'react'
import { CheckboxField } from './CheckboxField'
import { SelectField } from './SelectField'

type Props = {
    handleChange?: (event: any) => void,
    handleNext?: (event: any) => void,
}

export default function DietList2({ handleChange }: Props) {
    return (
        <>
            <SelectField
                options={["Please Select", "Milk", "Eggs", "Gluten", "Peanut", "Fish", "Soybeans", "Mustard", "Celery"].map((type, index) => ({
                    label: type,
                    value: index,
                }))}
            />
            <CheckboxField placeholder='Age' onChange={handleChange} labelName='test' />
        </>
    )
}

export { DietList2 }