import React from 'react'



function ImgCard({link, title}) {
  return (
    <>
        <div className='md:h-[350px] bg-black rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]'>
            <img name={`${title}`} className='rounded-xl duration-300 group-hover:opacity-30 h-full'  src={link} alt="" />
        </div>
    </>
  )
}

export default ImgCard
