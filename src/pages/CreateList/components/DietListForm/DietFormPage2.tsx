import React from 'react'
import { CheckboxField } from '../../../../components/Elements/CheckboxField/CheckboxField'
import { SelectField } from '../../../../components/Elements/SelectField/SelectField'

type Props = {
    handleChange?: (event: any) => void,
    handleNext?: (event: any) => void,
}

export default function DietFormPage2({ handleChange }: Props) {
    const checkboxList = [
        {
            name: 'test',
            labelName: 'test1',
        },
        {
            name: 'test2',
            labelName: 'test2',
        }
    ]
    return (
        <>
            <SelectField
                options={["Please Select", "Milk", "Eggs", "Gluten", "Peanut", "Fish", "Soybeans", "Mustard", "Celery"].map((type, index) => ({
                    label: type,
                    value: index,
                }))}
            />
            <CheckboxField wrapperClassName='flex flex-col' className='' checkboxList={checkboxList} onChange={handleChange} />
        </>
    )
}

// export { DietFormPage2 }