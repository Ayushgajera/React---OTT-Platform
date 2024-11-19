import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className='w-[20%] h-full border-r-2 ' >
            <div className="flex items-center">
                <i className="text-[#6556CD] ri-tv-fill mt-4 ml-2 text-3xl"></i>
                <h1 className="text-2xl text-white m-4">Netflix Pro</h1>
            </div>
            <nav className='flex flex-col gap-2 ml-8 m-2 text-lg text-gray-400'>
                <h2 className='mb-2 font-bold text-white'>New Feeds</h2>

                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2 rounded hover:text-white'>
                    <i className="ri-fire-fill"></i>  Tranding
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2   rounded hover:text-white'>
                    <i className="ri-bard-fill"></i>  popular
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4  py-2 rounded hover:text-white'>
                    <i className="ri-film-fill"></i>  Movies
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2  rounded hover:text-white'>
                    <i className="ri-tv-2-fill"></i>  Tv shows
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2  rounded hover:text-white'>
                    <i className="ri-team-fill"></i> Peoples
                </Link>
                <hr className='border-none h-[1px] bg-zinc-200' />
            </nav>
            <nav className='flex flex-col gap-2 ml-8 m-2  text-lg text-gray-400'>
                <h2 className='mb-2 font-bold text-white'>Website information</h2>

                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2 rounded hover:text-white'>
                    <i className="ri-information-line"></i> About
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2   rounded hover:text-white'>
                    <i className="ri-phone-fill"></i> Contact
                </Link>
            </nav>
        </div>
    )
}

export default Sidenav
