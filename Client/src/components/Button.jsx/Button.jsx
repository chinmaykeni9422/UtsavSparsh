import React from 'react'

function Button({name, onClick,...props}) {
  
  return (
    <button
        className={`bg-indigo-600 text-white font-[Poppins] py-2 px-5 rounded md:ml-8 hover:bg-indigo-400 duration-500`}
        onClick={onClick}
        {...props}
    >
        {name}
    </button>
  )
}

export default Button