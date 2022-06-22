import React from "react";
import './PokeInfo.css';

const PokeInfo = ({ pokemon }) => {
  console.log(pokemon);

  return (
    <>
      {
        (!pokemon) ? "" : (
            <>
            <div className="info">
            <h1 className="nome">{pokemon.name}</h1>
            <img className="image" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt="" />
            <h1 className="type">Type: {pokemon.types[0].type.name}</h1>
            </div>
            <div className="more_info">
            <div className="abilities" >
              <h1>Abilities</h1>
              {
                pokemon.abilities.map(abi => {
                  return(
                    <>
                      <h2>*{abi.ability.name}</h2>           
                    </>
                  )
                })
              }
            </div>
            <div className="stats">
              <h1>Stats</h1>
              {
                pokemon.stats.map(stat => {
                  return(
                    <h3 className="stats_size">*{stat.stat.name} : {stat.base_stat}</h3>
                  )
                })
              }
            </div>
            </div>
            </>
        )
      }
    </>
  );
};

export default PokeInfo;
