import React, { useState } from 'react'
import CategoryItem from './CategoryItem';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { imgData } from '../../assets/allData.js';


function Tempalte() {

  const [category , setCategory] = useState("") ;

  const [text, setText] = useState('') ;

  const selectCategory = (e) => {
    const selectedCategory = e.target.name;
    setCategory(selectedCategory); 
    
  }

  return (
    <>

      <div className=" flex  flex-col w-full">
        
        <div className='m-10 md:mt-10 md:ml-20 md:mr-20'>

          <h1 className='mb-4 font-serif text-2xl md:text-4xl'>
            Templates
          </h1>

          <p className='mb-5 font-serif text-sm hidden md:block md:text-xl'>
            Browse through a curated collection of stunning templates on utsavSparsh, ensuring your invitation stands out with sophistication and style. Find the perfect design to complement your event effortlessly.
          </p>

          <p className='mb-3  font-serif text-sm lg:hidden'>
            Browse through a curated collection of stunning templates on utsavSparsh .
          </p>

          <div className='flex'>
            
            <input placeholder='Enter desire template'  onChange={(e) => setText(e.target.value)} className='w-96 p-2 pl-3 mr-2 border border-gray-300 outline-none focus:bg-gray-50' type="text" />

            {/* <Button type="submit" name="search" /> */}

          </div>

        </div>

        <div>

          <div className='m-10 md:mt-3 md:ml-20 md:mr-20'>

            <h1 className='font-serif text-2xl'>
              Category
            </h1>

            <div className='w-full  mt-5 flex flex-wrap justify-around '>

            {
              imgData.filter((item) => {
                if(text === ''){
                  return item ;
                }
                else if(item.title.toLowerCase().includes(text.toLocaleLowerCase())){
                  return item ;
                }
              })
              .map((item, key) => {
                return (
                  <NavLink 
                    onClick={selectCategory}
                    to={`/template/${category}`}
                  >

                    <CategoryItem image={item.img} title={item.title} />

                  </NavLink>
                )
              })
            }

            </div>
            
          </div>

        </div>        

      </div>
      
    </>
  )
}

export default Tempalte