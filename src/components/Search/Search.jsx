import { useState } from "react";
import "./Search.css";

const Search = ({ setPokemons, setUrl, pokemon }) => {
  const [paginationInputData, setPaginationInputData] = useState("");
  const [searchByIdInputData, setSearchByIdInputData] = useState("");

  const handleInputPaginationChange = (e) => {
    setPaginationInputData(e.target.value);
  };

  const handlePagination = () => {
    setPokemons([]);
    setUrl(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${
        paginationInputData - 1
      }`
    );
    setPaginationInputData("");
  };

  const handleSearchByIdInput = (e) => {
    setSearchByIdInputData(e.target.value);
  };

  const handleSearchById = () => {
    setPokemons([]);
    setUrl(
      `https://pokeapi.co/api/v2/pokemon?limit=1&offset=${
        searchByIdInputData - 1
      }`
    );
    setSearchByIdInputData("");
  };
  return (
    <div className="inputs_wrapper">
      <input
        onChange={handleInputPaginationChange}
        value={paginationInputData}
        className="search_Input"
        placeholder="PaginationById"
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handlePagination();
          }
        }}
      />

      <input
        onChange={handleSearchByIdInput}
        value={searchByIdInputData}
        className="search_Input"
        placeholder="SearchById"
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            handleSearchById();
          }
        }}
      />
    </div>
  );
};

export default Search;
