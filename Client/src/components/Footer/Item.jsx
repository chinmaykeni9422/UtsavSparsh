import React from 'react'
import {NavLink} from 'react-router-dom'

function Item({Links, title}) {
  return (
    <>
        <ul>
            <h1 className='mb-1 text-gray-900 font-semibold'>{title}</h1>

            {
                Links.map((Link) => (
                    <li key={Link.name}>
                        <NavLink
                        className={() => `text-gray-900 hover:text-indigo-600 duration-300 text-sm cursor-pointer leading-6`}
                        to={Link.link}
                        >
                            {Link.name}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default Item
