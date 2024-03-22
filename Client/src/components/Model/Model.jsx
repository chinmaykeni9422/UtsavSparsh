import React from 'react'

function Model({visible, func}) {

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

            <div className='bg-white p-2 rounded'>

                <div>
                    modal
                </div>

            </div>
            
        </div>

    </>
  )
}

export default Model