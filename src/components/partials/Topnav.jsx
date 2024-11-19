import React from 'react'

function Topnav() {
  return (
    <div className=' w-full h-[10vh] text-white relative flex justify-center items-center'>
      <i class="ri-search-line text-3xl text-gray-400 "></i>
      <input type="text" placeholder='Search Anything'  className='w-[50%] mx-6 p-5 text-2xl bg-transparent outline-none rounded  '/>
      <i class="ri-close-large-line text-2xl text-gray-400"></i>
    </div>                        
  )
}

export default Topnav;
