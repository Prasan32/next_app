import React from 'react'

const Button = ({ text, type = "submit", className, loading }) => {
   return (
      <button
         type={type}
         className={`${className} btn hover:bg-red-500 `}>{text}
         {loading && <span className='loading loading-dots'></span>}
      </button>
   )
}

export default Button