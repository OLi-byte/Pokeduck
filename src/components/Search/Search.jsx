import { useState } from "react";
import "./Search.css";

const Search = ({ setPokemons, setUrl, setError }) => {
  const [paginationInputData, setPaginationInputData] = useState("");
  const [searchByNameInputData, setSearchByNameInputData] = useState("");

  const handlePagination = () => {
    setPokemons([]);
    setUrl(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${paginationInputData - 1}`);
    setPaginationInputData("");
  };

  const filterName = () => {
    setPokemons([]);
    setUrl(`https://pokeapi.co/api/v2/pokemon/${searchByNameInputData}`);
    setSearchByNameInputData("");
  };

  return (
    <div className="inputs_wrapper">
      <input
        onChange={(e) => setPaginationInputData(e.target.value)}
        value={paginationInputData}
        className="search_Input"
        placeholder="PaginationById"
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setError(false);
            handlePagination();
          }
        }}
      />

      <input
        onChange={(e) =>  setSearchByNameInputData(e.target.value)}
        value={searchByNameInputData}
        className="search_Input"
        placeholder="SearchByName"
        type="text"
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            setError(false);
            filterName();
          } else if (e.key === "?") {
            setError(false);
            setSearchByNameInputData("");
            setPokemons([]);
            setUrl("https://pokeapi.co/api/v2/pokemon/");
          }
        }}
      />

      <button className="search_button" onClick={() => {
        setError(false);
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
