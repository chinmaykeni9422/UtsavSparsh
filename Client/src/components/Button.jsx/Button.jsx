import React from 'react'

function Button({name, onClick, color, tColor}) {
  
  return (
    <button
        className={`bg-${color}-600 text-${tColor} font-[Poppins] py-2 px-5 rounded md:ml-8 hover:bg-${color}-400 duration-500`}
        onClick={onClick}
    >
        {name}
    </button>
  )
}

export default Button