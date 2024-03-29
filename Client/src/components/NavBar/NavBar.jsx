import React, { useState } from 'react'
import {NavLink,useNavigate} from 'react-router-dom'
import Button from '../Button.jsx/Button.jsx';

function NavBar() {

    const navigate=useNavigate()

    const NavList = [
        {
            id  : 1,
            name: "HOME",
            to  : ""
        },
        {
            id  : 2,
            name: "TEMPLATE",
            to  : "template"
        },
        {
            id  : 3,
            name: "ABOUT",
            to  : "about"
        },
        {
            id  : 4,
            name: "CONTACT",
            to  : "contact"
        }
    ] ;

    // hooks
    let [open, setOpen] = useState(false) ;


  return (
    <>
        <div className=' shadow sticky z-50 top-0'>
            
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>

                <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>

                    <span className='text-3xl text-indigo-600 mr-3 pt-2'>
                        <ion-icon name="sparkles-sharp"></ion-icon>
                    </span>

                    UtsavSparsh

                </div>

                <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open? 'close':'menu'}></ion-icon>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>

                    {
                        NavList.map((item) => (
                            <li className='md:ml-8 text-xl md:my-0 my-7' key={item.id}>
                                <NavLink 
                                    onClick={() => setOpen(!open) }
                                    to = {`/${item.to}`}
                                    className={({isActive}) => 
                                        `text-gray-800 ${isActive? 'text-indigo-600' : 'text-gray-800'} hover:text-gray-400 duration-500`
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li> 
                        ))
                    }

                    <div className='flex gap-1'>
                        <Button
                            name={'Register'}
                            onClick={()=>(
                                setOpen(!open) ,
                                navigate("/signup")
                            )}
                        />

                        <Button
                            name={'Login'}
                            onClick={()=>(
                                setOpen(!open) ,
                                navigate("/login")
                            )}
                        />
                    </div>

                </ul>

            </div>

        </div>
    </>
  )
}

export default NavBar ;
