import React, { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCard from './ImgCard'
import { imgData } from '../../assets/allData';
import { NavLink } from 'react-router-dom'
import { birthArray, babyArray, engArray, wedArray } from '../../assets/allData';

function Carousel() {

  const [imgArray, setimgArray] = useState([])

  

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          
        }
      }
    ]
  };

  const setArray = () => {
    console.log('hellow')
  }

  return (
    <>
      <div className='w-4/5  m-auto'>

        <Slider {...settings}>

          {
            imgData.map((item) => (

              <NavLink
                to='/template/category'
                onClick={setArray}
              >
                  <ImgCard link={item.img} />
              </NavLink>

            ))
          }

        </Slider>

      </div>
    </>
  )
}

export default Carousel