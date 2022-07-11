import { useState } from "react";
import "./Search.css";

const Search = ({ setPokemons, setUrl }) => {
  const [paginationInputData, setPaginationInputData] = useState("");
  const [searchByNameInputData, setSearchByNameInputData] = useState("");

  const handleInputPaginationChange = (e) => {
    setPaginationInputData(e.target.value);
  };

  const handlePagination = () => {
    setPokemons([]);
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${paginationInputData - 1}`);
    setPaginationInputData("");
  };

  const handleSearchByIdInput = (e) => {
    setSearchByNameInputData(e.target.value);
  };

  const filterName = () => {
    setPokemons([]);
    setUrl(`https://pokeapi.co/api/v2/pokemon/${searchByNameInputData}`);
    setSearchByNameInputData("");
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
        value={searchByNameInputData}
        className="search_Input"
        placeholder="SearchByName"
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            filterName();
          } else if (e.key === "<") {
            setUrl("https://pokeapi.co/api/v2/pokemon/");
          }
        }}
      />

      <button className="search_button" onClick={() => {
        if(paginationInputData !== "") {
          handlePagination();
        } else {
          filterName();
        }
      }}>serach</button>
    </div>
  );
};

export default Search;
