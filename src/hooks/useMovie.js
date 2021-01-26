import { useState, useEffect } from "react";
import axios from "axios";

const useMovie = (search) => {
  const [movies, setMovies] = useState([]);
  const apiKey = "fcc13a3a";

  useEffect(() => {
    if (search) {
      getMovies();
    }
  }, [search]);

  const getMovies = () => {
    axios
      .get(`http://www.omdbapi.com/?s=${search}&apikey=${apiKey}`)
      .then((res) => {
        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return movies;
};

export default useMovie;
