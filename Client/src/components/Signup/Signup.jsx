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
            <div className='grid sm:grid-cols-2 mb-8'>
                <div className='min-h-full bg-orange-400 sm:block  hidden'>image</div>
                <div className='min-h-full bg-white mx-5 mt-7'>

                    
                    <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                    <p className="mt-2 text-center text-base text-black/60 my-2">
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
                            />
                            <InputTaker

                                placeholder="Email"
                                type="email"
                                {...register("email",
                                    {
                                        required: true
                                    }
                                )}

                                className="mt-2"
                            />
                            <InputTaker
                                placeholder="Password"
                                type="password"
                                {...register("password",
                                    {
                                        required: true
                                    }
                                )}
                                className="mt-2"
                            />
                            <InputTaker
                                placeholder="Confirm Password"
                                type="password"
                                {...register("confirmPassword",
                                    {
                                        required: true
                                    }
                                )}
                                className="mt-2"
                            />
                            <div className='flex justify-center mt-2'>
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