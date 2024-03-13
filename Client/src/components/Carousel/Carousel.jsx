import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImgCard from './ImgCard'
import greenImg from '../../assets/plainGreen.jpg'

const images = [
  {
    img : greenImg
  },
  {
    img : greenImg
  },
  {
    img : greenImg
  },
  {
    img : greenImg
  },
  {
    img : greenImg
  },
  {
    img : greenImg
  },
  {
    img : greenImg
  }
] ;

function Carousel() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
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

  return (
    <>
      <div className='w-3/4  m-auto'>

        <Slider {...settings}>

          {
            images.map((item) => (
              
              <ImgCard link={item.img} />

            ))
          }

        </Slider>

      </div>
    </>
  )
}

export default Carousel