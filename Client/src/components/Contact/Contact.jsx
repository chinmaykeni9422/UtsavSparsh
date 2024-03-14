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
      <div className='mx-5 px-1 flex flex-col'  >
        <h1 className='text-2xl  text-center my-5'>Contact Us</h1>


        <form onSubmit={handleSubmit(contactUsSubmit)}>

          <div className='grid  sm:grid-cols-2 '>
            <div>
              <h2>For More Enquiries</h2>
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
                className="my-2"
              />
              <InputTaker
                type="number"
                placeholder="Enter Your Mobile Number"
                {...register("mobile", {
                  required: true,
                  maxLength: 10,

                })}
                className="my-2"
              />
            </div>
            <div>
            <textarea 
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

    </>
  )
}

export default Contact