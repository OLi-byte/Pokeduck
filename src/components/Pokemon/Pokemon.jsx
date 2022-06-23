import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon, loading, infoPokemon }) => {
  let { pokemon_card } = styles;
  var color;

  const getColor = (type) => {
    switch (type) {
      case "ground":
        color = "#E2BF65";
        break;

      case "fire":
        color = "#EE8130";
        break;

      case "water":
        color = "#6390F0";
        break;

      case "electric":
        color = "#F7D02C";
        break;

      case "grass":
        color = "#7AC74C";
        break;

      case "ice":
        color = "#96D9D6";
        break;

      case "fairy":
        color = "#D685AD";
        break;

      case "fighting":
        color = "#C22E28";
        break;

      case "flying":
        color = "#A98FF3";
        break;

      case "poison":
        color = "#A33EA1";
        break;

        case "psychic":
        color = "#F95587";
        break;

        case "bug":
        color = "#A6B91A";
        break;

        case "rock":
        color = "#B6A136";
        break;

        case "ghost":
        color = "#735797";
        break;

        case "dark":
        color = "#705746";
        break;

        case "dragon":
        color = "#6F35FC";
        break;

        case "steel":
        color = "#B7B7CE";
        break;

      default:
        color = "#A8A77A";
        break;
    }
    return color;
  };

  return (
    <>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        pokemon.map((pokemon) => {
          let varColor = getColor(pokemon.types[0].type.name);
          return (
            <div
              className={pokemon_card}
              style={{ background: varColor }}
              key={pokemon.id}
              onClick={() => infoPokemon(pokemon)}
            >
              <h2>{pokemon.id}</h2>
              <img src={pokemon.sprites.front_default} alt="" />
              <h2>{pokemon.name}</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Pokemon;
