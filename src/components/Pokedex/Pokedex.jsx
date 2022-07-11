import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PokeInfo from "../PokeInfo/PokeInfo";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokedex.css";
import Search from "../Search/Search";

const Pokedex = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pokedex, setPokedex] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [previousUrl, setPreviousUrl] = useState();
  const [nextUrl, setNextUrl] = useState();
  const shouldLog = useRef(true);

  useEffect(() => {
    const getPokemons = async (res) => {
      res.map(async (pokemon) => {
        const result = await axios.get(pokemon.url);
        setPokemons((state) => {
          state = [...state, result.data];
          state.sort((a, b) => (a.id > b.id ? 1 : -1));
          return state;
        });
      });
    };

    const filterPokemon = async () => {
      const result = await axios.get(url);
      setPokemons((state) => {
        state =  [result.data];  
        return state;
      })
  
    };
    
      if (shouldLog.current) {
        shouldLog.current = false;
        const fetchPokemons = async () => {
          setLoading(true);
          const res = await axios.get(url);
            if(!res.data.results) {
              filterPokemon(res.data);
              setNextUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id +1}`);
              setPreviousUrl(`https://pokeapi.co/api/v2/pokemon/${res.data.id -1}`);
            } else {
              getPokemons(res.data.results); 
              setPreviousUrl(res.data.previous);
              setNextUrl(res.data.next);
            }
          setLoading(false);
        };
        fetchPokemons();
    }

  }, [url]);

  return (
    <>
      <div className="pokemons_list_container">
        <Pokemon
          pokemon={pokemons}
          loading={loading}
          infoPokemon={(pokeInfo) => setPokedex(pokeInfo)}
        />
        <div className="buttons_wrapper">
          <button
            className="previous_button"
            onClick={() => {
              shouldLog.current = true;
              setPokemons([]);
              setUrl(previousUrl);
            }}
          >
            Previous
          </button>
          <button
            className="next_button"
            onClick={() => {
              shouldLog.current = true;
              setPokemons([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        </div>
        <div>
          {
            (shouldLog.current = true ? (
              <Search
                setPokemons={setPokemons}
                setUrl={setUrl}
                pokemon={pokemons}
                loading={loading}
                setLoading={setLoading}
              />
            ) : (
              {}
            ))
          }
        </div>
      </div>
      <div className="pokedex-container">
        <PokeInfo pokemon={pokedex} shouldLog={shouldLog}/>
      </div>
    </>
  );
};

export default Pokedex;
