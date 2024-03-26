import React from 'react'
import Button from '../Button.jsx/Button'

function Model({visible, func, url}) {

    const handleContainerOnlyClose = (e) => {
        if(e.target.id === 'container'){
            func() ;
        }
    }

    if(!visible) return null ;

  return (
    <>

        <div id='container' onClick={handleContainerOnlyClose} className='flex justify-center items-center fixed backdrop-blur-sm inset-0 bg-opacity-30 bg-black'>

            <button className='fixed right-5 top-20 text-2xl' onClick={func}>
                    X
            </button>

            <div className='flex justify-evenly p-8 bg-white rounded'>

                <div className='mr-4 border p-2 rounded-md border-gray-300'>
                    <img className='rounded-xl object-cover h-[450px] w-[650px]' src={url} alt="" />
                </div>

                <div className='p-2 flex flex-col'>
                    
                    <div className='p-2 pb-6 w-[350px]'>
                        Quaerat architecto eveniet officiis nulla tempora. Officiis dolorum quisquam nisi rem laudantium?
                    </div>

                    <button className='font-[Poppins] text-white py-2 px-5 rounded bg-indigo-600 hover:bg-indigo-400 duration-500'>
                        Customize this template
                    </button>
                    
                </div>

            </div>
            
        </div>

    </>
  )
} 

export default Model