'use client'
import React from 'react'

const InputRow = ({ id, type, placeholder, labelText, name, onChange, value, required, inputClass, labelClass, divClass }) => {
   return (
      <div className={`mb-4 ${divClass}`}>
         <label htmlFor={name} className={`block text-lg mb-2 capitalize ${labelClass}`}>{labelText || name}</label>
         <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`w-full bg-white items-baseline text-lg border focus:outline focus:outline-blue-500 py-2 px-2 rounded-md tracking-tight ${inputClass}`}
         />
      </div>
   )
}

export default InputRow