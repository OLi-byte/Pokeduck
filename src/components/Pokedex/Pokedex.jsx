import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import PokeInfo from "../PokeInfo/PokeInfo";
import Pokemon from "../Pokemon/Pokemon";
import "./Pokedex.css";

const Pokedex = () => {
  const [Pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Info, setInfo] = useState();
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?limit=20");
  const [previousUrl, setPreviousUrl] = useState();
  const [nextUrl, setNextUrl] = useState();

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

  const shouldLog = useRef(true);
  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      const fetchPokemons = async () => {
        setLoading(true);
        const res = await axios.get(url);
        setPreviousUrl(res.data.previous);
        setNextUrl(res.data.next);
        getPokemons(res.data.results);
        setLoading(false);
      };
      fetchPokemons();
    }
  }, [url]);

  return (
    <>
      <div className="container">
        <Pokemon
          pokemon={Pokemons}
          loading={loading}
          infoPokemon={(pokeInfo) => setInfo(pokeInfo)}
        />
        <div className="buttons">
          <button className="previous" onClick={() => {
            shouldLog.current = true;
            setPokemons([])
            setUrl(previousUrl);
            console.log(previousUrl)
          }}>Previous</button>

          <button className="next" onClick={() => {
            shouldLog.current = true;
            setPokemons([])
            setUrl(nextUrl);
            console.log(nextUrl)
          }}>Next</button>
        </div>
      </div>
      <div className="info-container">
        <PokeInfo pokemon={Info} />
      </div>
    </>
  );
};

export default Pokedex;
