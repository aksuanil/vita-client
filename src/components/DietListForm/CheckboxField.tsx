import * as React from 'react';

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type CheckboxFieldProps = {
    className?: string;
    name?: string;
    placeholder?: string;
    labelName: string;
    value?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
};

const CheckboxField = (props: CheckboxFieldProps) => {
    const { className, name, labelName, onChange } = props;
    return (
        <>
            <input
                type='checkbox'
                name={name}
                className={`${className}`}
                onChange={onChange}
                value={1}
            />
            <label htmlFor={name} className="text-gray-600">{labelName}</label>
        </>

    );
};

export { CheckboxField }