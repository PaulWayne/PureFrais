import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  // FIX: Add children to props to resolve TS error when destructuring.
  children?: React.ReactNode;
}

// FIX: Destructure disabled prop to use it correctly and avoid type error on props.disabled
export const Button = ({ children, isLoading = false, disabled, ...props }: ButtonProps) => (
  <button
    {...props}
    disabled={isLoading || disabled}
    className="w-full flex justify-center bg-brand-teal text-white font-bold py-4 px-8 rounded-lg hover:opacity-90 transition-opacity shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
  >
    {isLoading ? (
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    ) : (
      children
    )}
  </button>
);
