import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useParams, Link } from "react-router-dom";
import {
  Movie,
  Background,
  Poster,
  Description,
} from "../styles/MovieDescriptionStyle";
import { IoIosReturnLeft } from "react-icons/io";

const MovieDescription = () => {
  const { movies } = useContext(MovieContext);
  const { id } = useParams();

  return (
    <Background>
      {movies
        .filter((movie) => movie.imdbID === id)
        .map((movie, index) => (
          <Movie key={index}>
            <Link to={`/movies`}>
              <button title="return">
                <IoIosReturnLeft />
              </button>
            </Link>
            <Poster src={movie.Poster} />
            <Description>
              <h2>{movie.Title}</h2>
              <h4>Year: {movie.Year}</h4>
              <h4>Type: {movie.Type}</h4>
            </Description>
          </Movie>
        ))}
    </Background>
  );
};

export default MovieDescription;
