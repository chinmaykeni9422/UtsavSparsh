import React from 'react'
import { images } from '../../assets/allData'

function ShowCategory() {
  return (
    <>

      <div className='md:h-[350px]  rounded-xl'>

        <div className='grid grid-cols-3 p-10'>

          {
            images.map((item) => (
              <div className='md:h-[350px] m-4 rounded-xl'>
                <img className='rounded-xl  h-full'  src={item.img} alt="" />
              </div>
            )) 
          }

        </div>

      </div>
      
    </>
  )
}

export default ShowCategory