import React, { useId } from 'react'

const InputTaker = React.forwardRef(function InputTaker({
    label,
    type="text",
    className="",
    ...props
},ref){

  const id = useId();

return(
    <>
      <div className='w-full'>

        {label && 
          <label className='inline-block mb-1 pl-1' htmlFor={id}>
            {label}
          </label>
        }

        <input
          type={type}
          className={`px-3 py-3 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-300 w-80 ${className}`}
          ref={ref}
          {...props}
          id={id}
        />

      </div>
    </>
)

})
export default InputTaker;