import React from 'react';

function CustomInput({ type, placeholder,onChange,filtro}) {
  return (
    <>
    <input type={type} placeholder={placeholder} onChange={onChange} value={filtro}/>
    </>
  );
}

export default CustomInput;

