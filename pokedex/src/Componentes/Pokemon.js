import React, { useContext } from "react";
import FavoriteContext from "../Context/Context";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const Poke1 = styled.img`
background-image: url("https://images2.imgbox.com/c5/87/DJESPxIb_o.png");
background-size: cover;
padding:4vh;
`
const Poke0 = styled.img`

background-image: url(" https://images2.imgbox.com/b7/05/vOIkmpwq_o.png");
/* background-image: url("https://cdn-icons-png.flaticon.com/512/1752/1752765.png"); */
background-size: cover;
padding:4vh;
`

const Pokemon = (props) => {
  const { pokemon } = props;
  const { favoritePokemons, updateFavoritePokemons } = useContext(
    FavoriteContext
  );
  const history = useHistory();
  const Detalhes = () => {
      history.push("/Detalhes");
  };
  const pokeBolaAtivada = <Poke1 />;
  const pokeBolaDesativada = <Poke0 />;
  const pokebola = favoritePokemons.includes(pokemon.name) ? pokeBolaAtivada : pokeBolaDesativada;

  const clickPokeBola = (e) => {
    e.preventDefault();
    updateFavoritePokemons(pokemon.name);
  };

  return (
    <div className="pokemon-card">
      <div className="pokemon-img-container">
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="pokemon-img"
          onClick={Detalhes}
        />
      </div>
      <div   className="card-body" >
        <div className="card-top">
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className="card-bottom">
          <div className="pokemon-type">
            {pokemon.types.map((type, idx) => {
              return (
                <div key={idx} className="pokemon-type-text" >
                  {type.type.name}
                  
                </div>
              );
            })}
          </div>
          
          <div  className="" onClick={clickPokeBola}>
            <div className="pokemon-favorite">{pokebola}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
