import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  // FIX: Explicitly define 'id' as it's required for the label's htmlFor and was causing a type error.
  id: string;
}

export const Checkbox = ({ id, label, required, ...props }: CheckboxProps) => (
  <div className="flex items-start">
    <input
      id={id}
      type="checkbox"
      {...props}
      // FIX: Pass the 'required' prop to the underlying input. It was destructured but not used.
      required={required}
      className="h-5 w-5 rounded border-gray-300 text-brand-teal focus:ring-brand-teal mt-0.5"
    />
    <div className="ml-3 text-sm">
       <label htmlFor={id} className="font-medium text-gray-700">
          {label} {required && <span className="text-brand-red">*</span>}
       </label>
    </div>
  </div>
);
