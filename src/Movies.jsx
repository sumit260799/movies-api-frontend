import React from "react";
import { useGlobalContext } from "./context";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
import { Link } from "react-router-dom";
const Movies = () => {
  const { movies, isLoading } = useGlobalContext();
  console.log(movies);
  if (isLoading) {
    return <div className="loading">Loading.....</div>;
  }
  return (
    <section className="movies">
      {movies.map((movie) => {
        const { _id, name, poster, desc, year, imdb, genre } = movie;
        return (
          <Link to={`/movies/${_id}`} key={_id} className="movie">
            <article>
              <img src={poster} alt={name} />
              <div className="movie-info">
                <h4 className="title">{name}</h4>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
