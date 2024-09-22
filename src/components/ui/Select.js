import React from 'react';

export const Select = ({ onValueChange, children }) => {
  const handleChange = (event) => {
    onValueChange(event.target.value);
  };

  return (
    <select onChange={handleChange} className="border border-gray-300 rounded-md p-2">
      {children}
    </select>
  );
};

export const SelectTrigger = ({ children, className }) => {
  return (
    <div className={`border border-gray-300 rounded-md p-2 ${className}`}>
      {children}
    </div>
  );
};

export const SelectValue = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

export const SelectContent = ({ children }) => {
  return <div>{children}</div>;
};

export const SelectItem = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
