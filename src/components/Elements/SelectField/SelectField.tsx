import * as React from 'react';

type Option = {
  label: React.ReactNode;
  value: string | number | string[];
};

type SelectFieldProps = {
  options: Option[];
  className?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement> | undefined;
};

const SelectField = (props: SelectFieldProps) => {
  const { options, className, defaultValue, placeholder, required = true, onChange } = props;
  return (
      <select
        placeholder={placeholder}
        name="location"
        className={`${className} w-full p-2 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 font-medium leading-none text-gray-800`}
        defaultValue={defaultValue}
        onChange={onChange}
        required = {required}
      >
        {options.map(({ label, value }) => (
          <option key={label?.toString()} value={value}>
            {label}
          </option>
        ))}
      </select>
  );
};

export { SelectField }