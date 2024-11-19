import axios from '../../Utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import noimage from '../../../public/pngwing.com.png';

function Topnav() {
  const [query, setquery] = useState('');
  const [search, setSearch] = useState([]);


  const getSearch = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      if (data) {

        setSearch(data.results || []);
      } else {
        setSearch([]);
      }
      // console.log(search)

    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSearch();
  }, [query]);

  return (
    <div className=' w-80% h-[10vh] text-white relative flex justify-start items-center ml-[20%]'>
      <i className="ri-search-line text-3xl text-gray-400 pt-1"></i>
      <input onChange={(e) => { setquery(e.target.value) }} value={query} type="text" placeholder='Search Anything' className='input-search w-[50%] mx-2 p-5 text-2xl font-semibold bg-transparent outline-none rounded  ' />

      {query.length > 0 && (<i onClick={() => { setquery('') }} className="ri-close-large-line text-2xl text-gray-400 hover:text-gray-600"></i>)}



      <div className='absolute w-[50%] max-h-[50vh] bg-zinc-400 top-[90%] left-[5%] overflow-auto'>
        {query.length>0? search.length > 0 ? search.map((s, i) => (
          <Link key={i} className=' text-black justify-start items-center inline-flex p-4 bg-zinc-400 w-full  border-b  border-zinc-100'>
            <img className="w-[10vh] h-[10vh] object-cover rounded mr-4" src={s.poster_path ? `https://image.tmdb.org/t/p/original/${s.poster_path}` : noimage} alt="" />
            <span className='text-xl px-4 font-semibold p-2 '>  {s.title || s.name || "Unknown Title"}</span>
          </Link>
        )) : (
          <p className="text-white p-4">No results found</p>
        ):
        <></>}



      </div>
    </div>
  )
}

export default Topnav;
