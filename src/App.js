import MovieList from "./components/MovieList";
import MovieDescription from "./components/MovieDescription";
import MovieContextProvider from "./contexts/MovieContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SearchContextProvider from "./contexts/SearchContext";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <SearchContextProvider>
        <MovieContextProvider>
          <Navbar />
          <Switch>
            <Route path="/movies" children={<MovieList />} />
            <Route path="/movie/:id" children={<MovieDescription />} />
            <Route path="/" children={<Redirect to="/movies" />} />
          </Switch>
        </MovieContextProvider>
      </SearchContextProvider>
    </Router>
  );
}

export default App;
