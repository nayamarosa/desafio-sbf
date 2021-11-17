import React from 'react';

const Button = ({ id, text, onClick, ...props}) => {
  return (
    <button className="button button__primary"
      id={id} 
      onClick={onClick} 
      {...props}
    >
      {text}
    </button>
  ) 
}

export default Button;