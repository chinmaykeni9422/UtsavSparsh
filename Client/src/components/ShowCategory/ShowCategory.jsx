import React from 'react';
import { images } from '../../assets/allData';
import ImgCard from '../Carousel/ImgCard';

function ShowCategory() {
  return (
    <>
    <div>
        <div className='mt-5 ml-10 font-serif text-xl uppercase text-blue-500'>
          <h1>select your desired template</h1>
        </div>

        <div className='py-8 md:py-13'> {/* Adjusted padding to create space */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 px-4 md:px-8'> {/* Added gap and adjusted padding */}
            {images.map((item, index) => (
              <div key={index} className='w-full md:w-auto'> {/* Added key and adjusted width */}
                <ImgCard link={item.img} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowCategory;
