import React, { createContext, useState, useEffect, useContext } from "react";
import useMovie from "../hooks/useMovie";
import { SearchContext } from "./SearchContext";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const { search } = useContext(SearchContext);
  const movies = useMovie(search);

  return (
    <MovieContext.Provider value={{ movies }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
