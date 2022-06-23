import React from "react";
import "./PokeInfo.css";

const PokeInfo = ({ pokemon }) => {
  return (
    <>
      {!pokemon ? (
        ""
      ) : (
        <>
          <div className="details_container">
            <h1 className="pokemon_name">{pokemon.name}</h1>
            {!pokemon.sprites.other.dream_world.front_default ? (
              <img
                className="pokemon_sprite"
                src={pokemon.sprites.front_default}
                alt=""
              />
            ) : (
              <img
                className="pokemon_sprite"
                src={pokemon.sprites.other.dream_world.front_default}
                alt=""
              />
            )}
            <div className="pokemons_type">
              <h1>Type: </h1>
              {pokemon.types.map((pokeTypes) => {
                return <h1>{pokeTypes.type.name}</h1>;
              })}
            </div>
          </div>
          <div className="info_cards">
            <div className="abilities_card">
              <h1>Abilities</h1>
              {pokemon.abilities.map((pokeAbilities) => {
                return (
                  <>
                    <h2>*{pokeAbilities.ability.name}</h2>
                  </>
                );
              })}
            </div>
            <div className="stats_card">
              <h1>Stats</h1>
              {pokemon.stats.map((pokeStats) => {
                return (
                  <h3 className="stats_size">
                    *{pokeStats.stat.name} : {pokeStats.base_stat}
                  </h3>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PokeInfo;
