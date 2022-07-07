type InputFieldProps = {
    type?: 'text' | 'email' | 'password' | 'number' | 'date' | 'time';
    className?: string;
    name?: string;
    placeholder?: string;
    value?: any;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined
};

const InputField = (props: InputFieldProps) => {
    const { type = 'text', className, placeholder, value, onChange, name } = props;
    return (
        <input
            name={name}
            value={value || ''}
            placeholder={placeholder}
            type={type}
            className={`${className} w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800`}
            onChange={onChange}
        />
    );
};

export { InputField }