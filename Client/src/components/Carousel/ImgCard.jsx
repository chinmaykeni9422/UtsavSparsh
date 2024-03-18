import React from 'react'



function ImgCard({link}) {
  return (
    <>
        <div className='md:h-[350px]   bg-black rounded-xl'>
            <img className='rounded-xl  h-full' src={link} alt="" />
        </div>
    </>
  )
}

export default ImgCard