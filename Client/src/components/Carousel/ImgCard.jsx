import React from 'react'



function ImgCard({link, title}) {
  return (
    <>
        <div className='md:h-[350px]  bg-black rounded-xl'>
            <img name={`${title}`} className='rounded-xl  h-full' src={link} alt="" />
        </div>
    </>
  )
}

export default ImgCard