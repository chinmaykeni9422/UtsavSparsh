import React from 'react'
import Button from '../Button.jsx/Button';


function Tempalte() {
  return (
    <>

      <div className=" flex flex-col h-screen w-full">
        
        <div className='m-10 md:mt-10 md:ml-20 md:mr-20'>

          <h1 className='mb-4 font-serif text-2xl md:text-4xl'>
            Templates
          </h1>

          <p className='mb-5 font-serif text-sm hidden md:block md:text-xl'>
            Browse through a curated collection of stunning templates on utsavSparsh, ensuring your invitation stands out with sophistication and style. Find the perfect design to complement your event effortlessly.
          </p>

          <p className='mb-3  font-serif text-sm lg:hidden'>
            Browse through a curated collection of stunning templates on utsavSparsh .
          </p>

          <div className='flex'>
            
            <input placeholder='Enter desire template' className='p-2 pl-3 mr-2 w-full border border-gray-300 outline-none focus:bg-gray-50' type="text" />

            <Button type="submit" name="search" />

          </div>

        </div>

        <div>

          <div className='m-10 md:mt-3 md:ml-20 md:mr-20'>

            <h1 className='font-serif text-2xl'>
              Category
            </h1>

          </div>

        </div>        

      </div>
      
    </>
  )
}

export default Tempalte