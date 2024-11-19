import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
    return (
        <div className='w-[20%] h-full border-r-2 ' >
            <h1 className='flex'>

                <i className='text-[#6556CD] ri-tv-fill mt-4 ml-2 text-3xl'></i>
                <h1 className='text-2xl  text-white m-4'>Netflix pro</h1>
            </h1>
            <nav className='flex flex-col gap-2 ml-8 m-2 text-lg text-gray-400'>
                <h2 className='mb-2 font-bold text-white'>New Feeds</h2>

                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2 rounded hover:text-white'>
                    <i class="ri-fire-fill"></i>  Tranding
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2   rounded hover:text-white'>
                    <i class="ri-bard-fill"></i>  popular
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4  py-2 rounded hover:text-white'>
                    <i class="ri-film-fill"></i>  Movies
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2  rounded hover:text-white'>
                    <i class="ri-tv-2-fill"></i>  Tv shows
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2  rounded hover:text-white'>
                    <i class="ri-team-fill"></i> Peoples
                </Link>
                <hr className='border-none h-[1px] bg-zinc-200' />
            </nav>
            <nav className='flex flex-col gap-2 ml-8 m-2  text-lg text-gray-400'>
                <h2 className='mb-2 font-bold text-white'>Website information</h2>

                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2 rounded hover:text-white'>
                <i class="ri-information-line"></i> About
                </Link>
                <Link className=' duration-300 hover:bg-[#6556cd] px-4 py-2   rounded hover:text-white'>
                <i class="ri-phone-fill"></i> Contact
                </Link>
            </nav>
        </div>
    )
}

export default Sidenav
