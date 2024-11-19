import React, { useEffect, useState } from 'react'
import Sidenav from "./partials/Sidenav";
import Topnav from './partials/Topnav';
import axios from '../../src/Utils/axios';
import Header from "./partials/Header";

function Home() {
    document.title = "Netflilx pro | Homepage";
    const [wallpaper, setwallpaper] = useState();
    
    const getHeaderWallpaper = async () => {
        try {
          const { data } = await axios.get(`/trending/all/day`);
            setwallpaper(data.results || []);
            let randomdata=data.results[Math.floor(Math.random() *data.results.length)]
          setwallpaper(randomdata);
    
        } catch (error) {
          console.log(error);
        }
      }
      console.log(wallpaper)
      useEffect(() => {
        !wallpaper&&getHeaderWallpaper()
      }, []);
    return wallpaper?(
       <>
       <Sidenav/>
       <div className='w-[80%] h-full'>
       <Topnav/>
       <Header data={wallpaper}/>
       </div>
       
       
       </>
    ):<h1 className='text-white text-4xl '>Loading</h1>
}

export default Home
