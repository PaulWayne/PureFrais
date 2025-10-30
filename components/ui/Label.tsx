
import React from 'react';

export const Label = ({ htmlFor, children, required }: { htmlFor: string; children: React.ReactNode; required?: boolean; }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-brand-dark-blue mb-2">
    {children} {required && <span className="text-brand-red">*</span>}
  </label>
);
