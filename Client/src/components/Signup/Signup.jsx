import React, { useState } from 'react'
import InputTaker from "../Utils/Input"
import { useForm } from 'react-hook-form'
import Button from '../Button.jsx/Button';
import { Link } from 'react-router-dom';

function Signup() {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("")

    const handleSignup = (data) => {
        console.log(data)

    }
    return (
        <>
            <div className='flex h-[40.25rem]  sm:flex-row justify-center items-center '>

                <div className='w-full h-full m-2 sm:block  hidden'>
                    <img className='mt-1 ml-2 shadow-sm shadow-gray-400 rounded-lg w-full  h-full object-cover object' src="https://img.freepik.com/free-vector/modern-online-registration-composition_23-2147991434.jpg?t=st=1710215173~exp=1710218773~hmac=3d925551ca4c76f3ad46c598e8819d539b8b7c27eba0796d65067e8b6922dea5&w=740" alt="" />
                </div>

                <div className='flex flex-col items-center justify-center w-full bg-white'>
                    
                    <h2 className="text-center text-2xl font-bold leading-tight">
                        Sign up to create account
                    </h2>

                    <p className=" text-center text-base text-black/60 my-2">
                        Already have an account?&nbsp;
                        <Link
                            to="/login"
                            className="font-medium text-primary transition-all duration-200 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>

                    {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                    <form onSubmit={handleSubmit(handleSignup)}>

                        <div >

                            <InputTaker

                                placeholder="Full Name"
                                {...register("name", { required: true })}
                                className="mt-8"
                            />

                            <InputTaker

                                placeholder="Email"
                                type="email"
                                {...register("email",
                                    {
                                        required: true
                                    }
                                )}

                                className="mt-8"
                            />

                            <InputTaker
                                placeholder="Password"
                                type="password"
                                {...register("password",
                                    {
                                        required: true
                                    }
                                )}
                                className="mt-8"
                            />

                            <InputTaker
                                placeholder="Confirm Password"
                                type="password"
                                {...register("confirmPassword",
                                    {
                                        required: true
                                    }
                                )}
                                className="mt-8"
                            />

                            <div className='flex justify-center mt-8'>
                                <Button type="submit" name="Sign up" />
                            </div>

                        </div>

                    </form>

                </div>

            </div>

        </>
    )
}

export default Signup