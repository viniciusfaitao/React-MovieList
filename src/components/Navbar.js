import React, { useState, useContext, useEffect } from "react";
import SearchInput from "./SearchInput";
import { BackgroundNavbar } from "../styles/NavbarStyle";
import { SearchContext } from "../contexts/SearchContext";

const Navbar = () => {
  const [backgroundColorNavbar, setBackgroundColorNavbar] = useState({});
  const { search } = useContext(SearchContext);

  useEffect(() => {
    if (search) {
      setBackgroundColorNavbar({
        background: "rgba(0, 0, 0, 0.85)",
        boxShadow: "5px 5px 20px #000",
      });
    }
  }, [search]);

  return (
    <BackgroundNavbar style={backgroundColorNavbar}>
      <SearchInput />
    </BackgroundNavbar>
  );
};

export default Navbar;
