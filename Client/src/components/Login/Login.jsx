import React, { useState } from 'react'
import InputTaker from "../Utils/Input"
import { useForm } from 'react-hook-form'
import Button from '../Button.jsx/Button';
import { Link } from 'react-router-dom';

function Login({func}) {

    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("")

    const handleLogin = (data) => {
        console.log(data)

    }
    return (
        <>

            <div className='flex h-[40.25rem]  sm:flex-row justify-center items-center'>

                <div className='w-full h-full m-2 sm:block  hidden'>
                    <img className='mt-1 ml-2 -sm shadow-gray-400 rounded-lg w-full  h-full object-cover object' src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7893.jpg?w=740&t=st=1710214968~exp=1710215568~hmac=9802e1af094bb80e20e59d7c46a460cd765226925b58ea3619d8c1d7d5856a5f" alt="" />
                </div>

                <div className='flex flex-col items-center justify-center w-full bg-white'>
                    
                        <h2 className="text-center text-2xl font-bold leading-tight">
                            Sign in to your account
                        </h2>

                        <p className="text-center text-base text-black/60 my-2">
                        Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                            Signup
                            </Link>
                        </p>

                        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

                        <form  onSubmit={handleSubmit(handleLogin)}>

                            <div>
                            
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
                                
                                <div className='flex justify-center mt-8'>
                                    <Button type="submit" name="Login" />
                                </div>


                            </div>

                        </form>

                </div>

            </div>

        </>
    )
}

export default Login