import React from 'react'
import { useForm } from "react-hook-form"
import InputTaker from '../Utils/Input'
import Button from '../Button.jsx/Button'

function Contact() {
  const { register, handleSubmit } = useForm()

  const contactUsSubmit = (data) => {

    console.log(data)
  }
  return (
    <>

      <div className='flex h-[40.25rem]  sm:flex-row justify-center items-center'  >

        <div className='w-full h-full m-2 sm:block  hidden'>
          <img className='mt-1 ml-2 -sm shadow-gray-400 rounded-lg w-full  h-full object-cover object' src="https://img.freepik.com/free-vector/flat-customer-support-illustration_23-2148899114.jpg?w=740&t=st=1710418746~exp=1710419346~hmac=a8495f74d9ff7585a4f70334e7df94a1ddc19c549b444614260965469475bbae" alt="" />
        </div>

        <div className='flex flex-col items-center justify-center w-full bg-white'>

          <h1 className='text-lg sm:text-3xl mb-1 uppercase text-blue-500 font-serif'>
            Contact Us
          </h1>

          <p className='text-md sm:text-md text-blue-400 font-serif mb-3'>
            For More Enquiries
          </p>

          <form onSubmit={handleSubmit(contactUsSubmit)}>

            <div className=' flex flex-col justify-center items-center'>

              <div>

                <InputTaker
                  type="text"
                  placeholder="Enter Your Name"
                  {...register("name", {
                    required: true,

                  })}
                  className="my-2"
                />

                <InputTaker
                  type="email"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: true,

                  })}
                  className="my-2 "
                />

                <InputTaker
                  type="text"
                  placeholder="Enter Your Mobile Number"
                  {...register("mobile", {
                    required: true,
                    maxLength: 10,
                  })}
                  className="my-2"
                />

              </div>

              <div className='w-full flex flex-col items-center'>

                <textarea className='focus:outline-none border border-gray-300 w-full my-2 p-3'
                {...register("message",{required:true})}
                name="message" id="" cols="30" rows="10"
                placeholder='Write Your Message'>

                </textarea>
        
                <div className='my-2'>
                  <Button type="submit" name="Submit" />
                </div>

              </div>

            </div>

          </form>

        </div>

      </div>

    </>
  )
}

export default Contact