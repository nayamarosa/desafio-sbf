import React from 'react';

const Input = ({ id, label, onChange, ...props}) => {
  return (
    <input 
      id={id} 
      onChange={onChange} 
      {...props}
    />
  ) 
}

export default Input;