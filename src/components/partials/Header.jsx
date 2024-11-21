import React from "react";
import { Link } from "react-router-dom";

function Header({ data }) {
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${data.backdrop_path || 'default-image.jpg'})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[90vw] min-h-[60vh] flex flex-col justify-center items-start px-10  bg-red-400 "
    >
      <div className="rounded-lg max-w-[70%]">
        <h1 className="text-white text-4xl font-bold mb-4 leading-tight">
          {data.title || data.name || data.original_name || "No Title Available"}
        </h1>
        <p className="text-white text-md mb-4">
          {data.overview
            ? `${data.overview.slice(0, 200)}...`
            : "No description available."}{" "}
          <Link to="#" className="text-[#6556CD] underline">
            More
          </Link>
        </p>
        <div className="text-white flex items-center gap-4 text-sm mb-8">
          <div className="flex items-center gap-2">
            <i className="ri-megaphone-fill text-yellow-400 text-xl"></i>
            <span>{data.first_air_date || "Release date not available"}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-album-fill text-yellow-400 text-xl"></i>
            <span>{data.media_type?.toUpperCase() || "Unknown Media"}</span>
          </div>
        </div>
        <Link
          to="#"
          className="bg-[#6556CD] text-white font-semibold py-4 px-6 rounded-lg">
          Watch Trailer
        </Link>
      </div>
    </div>
  );
}

export default Header;
