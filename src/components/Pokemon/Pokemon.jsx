import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon, loading, infoPokemon }) => {
  let { card } = styles;

  const fun = (type) => {
    var color;

    switch (type) {
      case "grass":
        color = "#00FF7F";

        break;

      case "fire":
        color = "#B22222";

        break;

      case "bug":
        color = "#008000";

        break;

      case "dark":
        color = "#1C1C1C";

        break;

      case "dragon":
        color = "##20B2AA";

        break;

      case "electric":
        color = "#FFD700";

        break;

      case "fairy":
        color = "#DC143C";

        break;

      case "fighting":
        color = "#D2691E";

        break;

      case "flying":
        color = "#5F9EA0";

        break;

      case "poison":
        color = "#8B008B";

        break;

      default:
        color = "rgb(100, 70, 34)";
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
          let varColor = fun(pokemon.types[0].type.name);
          return (
            <div
              className={card}
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
