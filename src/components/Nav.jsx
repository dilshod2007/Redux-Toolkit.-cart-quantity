import { SlBasket } from "react-icons/sl";
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className="bg-gray-100 p-4 shadow-md flex justify-between items-center">
                <Link to="/" className="text-xl font-semibold text-gray-800 hover:text-blue-600">
                    Home
                </Link>

                <Link to="/cart" className="relative text-gray-800 hover:text-blue-600">
                    <SlBasket className="text-2xl" />
                </Link>
            </div>


        </>
    )
}

export default Nav