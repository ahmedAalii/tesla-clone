import React from 'react'
import { FiChevronDown } from "react-icons/fi";


const Model = () => {
    return (
        <div>

            <div className="absolute inset-x-0 top-[15%] text-center">
                <h1 className='text-4xl font-bold'>Model 3 </h1>
                <p className='p-2 '>Order Online For <a href="https://www.tesla.com/support/taking-delivery" target='_blank'> <span className='hover:text-sky-700 underline underline-offset-4 '> Touchless Delivery</span></a></p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 top-[30%] gap-4'>
                <a href="https://www.tesla.com/modely/design#overview" target='_blank'><button className="bg-[#3e6ae1] text-white cursor-pointer px-6 py-3 rounded-md hover:bg-blue-800 transition">
                    Order Now
                </button></a>
                <a href="https://www.tesla.com/inventory/new/my" target='_blank'><button className="bg-[#f4f4f4] cursor-pointer text-black px-6 py-3 rounded-md hover:bg-gray-400 transition">
                    View Inventory
                </button></a>
            </div>
            <div className='flex justify-center animate-bounce absolute bottom-0 inset-x-0 pb-4'>
                <FiChevronDown size={24} color="black" />
            </div>

        </div>
    )
}

export default Model
