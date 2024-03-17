import React from 'react'

function CategoryItem({image, title}) {
  return (
    <>

        <div className='p-5 hover:text-blue-600'>

            <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img className='w-[550px] h-[250px] object-cover' src={image} alt="" />
            </div>

            <div className=' font-serif mt-3 text-center'>
                <p>{title}</p>
            </div>

        </div>

    </>
  )
}

export default CategoryItem