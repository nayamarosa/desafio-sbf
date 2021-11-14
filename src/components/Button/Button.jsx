import React from 'react';

const Button = ({ id, text, onClick, ...props}) => {
  return (
    <button 
      id={id} 
      onChange={onClick} 
      {...props}
    >
      {text}
    </button>
  ) 
}

export default Button;