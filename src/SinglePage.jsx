import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
const SingleMovie = () => {
  const { API_ENDPOINT } = useGlobalContext();
  const { name } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(true);
  const fetchMovie = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setMovie(data.movies);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&search=${name}`);
  }, [name]);

  if (isLoading) {
    return (
      <div className="spinner">
        <div className="spinner-ring"></div>
      </div>
    );
  }
  return (
    <>
      {movie.map((singlemovie) => {
        const { name, poster, desc, genre, year, imdb, _id } = singlemovie;
        return (
          <section key={_id} className="single-movie">
            <img className="" src={poster} alt={name} />
            <div className="single-movie-info">
              <h2 className="text-[1.9rem] text-zinc-800">{name}</h2>
              <h4 className="text-[#f5c518] mt-2">{genre}</h4>
              <p className="text-zinc-700"> {desc}</p>
              <span className="flex gap-10 text-[#f5c518]">
                <h4>{year}</h4> <h4>⭐{imdb}</h4>
              </span>
              <Link to="/">
                <button className="bg-yellow-400 rounded-md px-3 py-2 text-white mt-10 hover:bg-white hover:text-yellow-400 hover:border-yellow-400 hover:border-2 transition-opacity duration-700">
                  Home
                </button>
              </Link>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default SingleMovie;
