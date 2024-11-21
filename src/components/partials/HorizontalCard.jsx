import React from 'react'
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";


function HorizontalCard({ data}) {
  return (
    <div className="w-full h-[50vh] mr-[10%] ">
     
      <div className="w-full flex flex-nowrap overflow-x-auto space-x-4">
        {data.map((item, i) => (
          <div key={i} className=" bg-zinc-900 cards min-w-[17%] min-h-[53vh] m-2 rounded-lg overflow-hidden ">
            <img
              className="w-full h-[50%] object-cover rounded-t-md"
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || 'default-image.jpg'}`}
              alt={item.title || item.name || item.original_name || 'No Title Available'}
            />
            <div className="p-2">
              <h1 className="text-white text-2xl font-semibold truncate">
                {item.title || item.name || item.original_name || 'No Title Available'}
              </h1>
              <p className="text-white text-sm ">{item.overview.slice(0, 60) || "No Information available"}<Link className='text-blue-400'> ...More</Link></p>
            </div>
          </div>
        ))}
      </div>
    </div>



  )
}

export default HorizontalCard
