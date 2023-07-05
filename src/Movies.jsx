import React from "react";
import { useGlobalContext } from "./context";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
import { Link } from "react-router-dom";
const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  if (isLoading) {
    return (
      <div className="spinner">
        <div className="spinner-ring"></div>
      </div>
    );
  }
  return (
    <section className="movies grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 justify-around gap-5 lg:gap-10">
      {movies.map((movie) => {
        const { _id, name, poster, desc, year, imdb, genre } = movie;
        return (
          <Link
            to={`/singlemovie/${name}`}
            key={_id}
            className="movie h-[260px] sm:h-[300px]  xl:h-[350px] overflow-hidden"
          >
            <article className="w-[100%] h-[100%]  overflow-hidden">
              <img
                className="object-cover block w-[100%] h-[100%]"
                src={poster}
                alt={name}
              />
              <span className="imdb">{imdb}</span>
              <div className="movie-info">
                <h4 className="title">{name}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
