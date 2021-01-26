import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import {
  List,
  Movie,
  BackgroundPoster,
  Poster,
  NoMovie,
} from "../styles/MovieListStyle";
import { Link } from "react-router-dom";
import { ImSad } from "react-icons/im";

const MovieList = () => {
  const { movies } = useContext(MovieContext);

  return (
    <List>
      {movies !== undefined ? (
        movies.map((movie) => (
          <Movie key={movie.imdbID}>
            <BackgroundPoster>
              <Poster src={movie.Poster} />
            </BackgroundPoster>
            <h4>{movie.Title}</h4>
            <Link to={`/movie/${movie.imdbID}`}>
              <button>Description</button>
            </Link>
          </Movie>
        ))
      ) : (
        <NoMovie>
          <p>
            No movies found <ImSad />
          </p>
        </NoMovie>
      )}
    </List>
  );
};

export default MovieList;
