import React from 'react';
import { images } from '../../assets/allData';
import ImgCard from '../Carousel/ImgCard';
import { useParams } from 'react-router-dom';
import { birthArray, babyArray, engArray, wedArray } from '../../assets/allData';


function ShowCategory() {

  const {category} = useParams() ;
  console.log(category)

  let categoryArray ;

  switch (category) {
    case 'birthdayInvitation':
      categoryArray = birthArray;
      break;
    case 'babyshowerInvitation':
      categoryArray = babyArray;
      break;
    case 'engagementInvitation':
      categoryArray = engArray;
      break;
    case 'weddingInvitation':
      categoryArray = wedArray;
      break;
    default:
      categoryArray = [];
  }

  return (
    <>
    <div>
        <div className='mt-8 ml-10 font-serif md:text-2xl md:text-center  uppercase text-blue-700'>
          <h1>select your desire template</h1>
        </div>

        <div className='py-8 md:py-13'> {/* Adjusted padding to create space */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-8'> {/* Added gap and adjusted padding */}
            {categoryArray.map((item, index) => (
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
