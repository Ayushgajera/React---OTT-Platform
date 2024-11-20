import React, { useEffect, useState } from 'react';
import Sidenav from "./partials/Sidenav";
import Topnav from './partials/Topnav';
import axios from '../../src/Utils/axios';
import Header from "./partials/Header";
import HorizontalCard from "./partials/HorizontalCard";

function Home() {
  document.title = "Netflix Pro | Homepage";

  const [wallpaper, setWallpaper] = useState();
  const [category, setCategory] = useState();

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setWallpaper(data.results || []);
      let randomData = data.results[Math.floor(Math.random() * data.results.length)];
      setWallpaper(randomData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(category)
  const getCategory = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      setCategory(data.results || []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!wallpaper) getHeaderWallpaper();
    if (!category) getCategory();
  }, [wallpaper, category]);

  return wallpaper ? (
    <div className="w-full h-full flex flex-col md:flex-row">
      {/* Sidenav */}
      <Sidenav />

      <div className="flex flex-col items-center w-full md:w-4/5 ml-0 md:ml-[20%]">
        <Topnav />
        <Header data={wallpaper} />
        <HorizontalCard data={category} />
      </div>
    </div>
  ) : (
    <h1 className="text-white text-4xl">Loading...</h1>
  );
}

export default Home;
