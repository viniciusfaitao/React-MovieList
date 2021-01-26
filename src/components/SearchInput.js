import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import { BackgroundInput, FormInput } from "../styles/NavbarStyle";

const SearchInput = () => {
  const [inputHeight, setInputHeight] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const { newSearch } = useContext(SearchContext);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onKeyPress = (e) => {
    if (e.which === 13) {
      newSearch(searchTerm);
      setInputHeight({ height: "100px" });
    }
  };

  return (
    <div>
      <BackgroundInput style={inputHeight}>
        <FormInput>
          <input
            placeholder={"Search your movie here"}
            type="text"
            onKeyPress={onKeyPress}
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            type="button"
            disabled={searchTerm.length < 1}
            onClick={() => {
              newSearch(searchTerm);
              setInputHeight({ height: "100px" });
            }}
          >
            Search
          </button>
        </FormInput>
      </BackgroundInput>
    </div>
  );
};

export default SearchInput;
