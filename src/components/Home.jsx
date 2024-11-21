import React, { useEffect, useState } from 'react';
import Sidenav from "./partials/Sidenav";
import Topnav from './partials/Topnav';
import axios from '../../src/Utils/axios';
import Header from "./partials/Header";
import HorizontalCard from "./partials/HorizontalCard";
import Dropdown from "./partials/Dropdown"; // Ensure Dropdown is correctly imported

function Home() {
  document.title = "Netflix Pro | Homepage";

  const [wallpaper, setWallpaper] = useState(null);
  const [trending, setTrending] = useState([]);
  const [category, setCategory] = useState("all"); // Set default category

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      if (data?.results?.length) {
        let randomData = data.results[Math.floor(Math.random() * data.results.length)];
        setWallpaper(randomData);
      }
    } catch (error) {
      console.log("Error fetching header wallpaper:", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      setTrending(data.results || []);
    } catch (error) {
      console.log("Error fetching trending data:", error);
    }
  };

  useEffect(() => {
    if (!wallpaper) getHeaderWallpaper();
    getTrending();
  }, [category]);

  return wallpaper ? (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Sidenav */}
      <Sidenav />

      <div className="flex flex-col items-center w-full md:w-4/5 ml-0 md:ml-[20%]">
        <Topnav />
        <Header data={wallpaper} />
        <div className=' w-full flex justify-between py-2'>
          <h1 className="text-4xl text-zinc-300 ml-3">Trending</h1>
          {/* Dropdown Component */}
          <Dropdown 
            title="Filter" 
            options={["TV", "Movie", "All"]} 
            fnc={(e) => setCategory(e.target.value.toLowerCase())} 
          />
        </div>
        {/* Horizontal Card */}
        <HorizontalCard data={trending} />
      </div>
    </div>
  ) : (
    <h1 className="text-white text-4xl">Loading...</h1>
  );
}

export default Home;
