import * as React from 'react';

type Option = {
    label: React.ReactNode;
    value: string | number | string[];
};

type CheckboxFieldProps = {
    className?: string;
    wrapperClassName?: string;
    checkboxList?: { name: string; labelName: string; }[];
    value?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
};
const CheckboxField = (props: CheckboxFieldProps) => {
    const checkboxArr: any[] = []

    const { className, wrapperClassName, onChange, checkboxList } = props;
    checkboxList!.map((element) => {
        checkboxArr.push(
            <div className={`${className}`}>
                <>
                    <input
                        type='checkbox'
                        name={element.name}
                        // className={`${className}`}
                        onChange={onChange}
                        value={1}
                    />
                    <label htmlFor={element.name} className="text-gray-600">{element.labelName}</label>
                    {console.log(element.name)}
                </>
            </div>
        )
    });

    return (
        <div className={wrapperClassName}>
            {checkboxArr}
        </div>
    );
};

export { CheckboxField }