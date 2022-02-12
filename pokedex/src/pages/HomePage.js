import React, {useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import "./styles.css";
import Footer from "../Componentes/Footer";
import Navbar from "../Componentes/Navbar";
import Searchbar from "../Componentes/Searchbar";
import Pokedex from "../Componentes/Pokedex";
import { getPokemonData, getPokemons, searchPokemon } from "../api";
import { FavoriteProvider } from "../Context/Context";


const localStorageKey = "favorite_pokemon";


const Topo = styled.div`
background-size: 5%;

background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f22394df-9a75-4771-8225-ea50370155c7/d4mh7q5-25a47434-05e7-413b-9934-7c555ab034e8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyMjM5NGRmLTlhNzUtNDc3MS04MjI1LWVhNTAzNzAxNTVjN1wvZDRtaDdxNS0yNWE0NzQzNC0wNWU3LTQxM2ItOTkzNC03YzU1NWFiMDM0ZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o5MBcxD2GF6ZtvOpSmq2UBuRQ7wTjHLNgYN2f8AOyUU");
margin: 0;
padding:0;
width: 100vw;
height: 7vh;
display:flex;


`
const BotaoMenu = styled.button`
    width:10vw;
    height:7vh;
    background: red;
    border: 2% solid;
    border-radius: 3%;
    color: #FDFDFD;
    font-size: 100%large;
       

    :hover{
      background: #FFCB08;
        border: 2% solid #CC0000;
     
    }
    :active{
        background:gray;
        color: #FDFDFD;
        border: 2% solid #FDFDFD;
    }
    
`


export const HomePage = () => {
    const history = useHistory();

    const Favoritos = () => {
        history.push("/Favoritos");
    };

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [favorites, setFavorites] = useState([]);
    const [notFound, setNotFound] = useState(false);
    const [searching, setSearching] = useState(false);

    const fetchPokemons = async () => {
        try {
          setLoading(true);
          const data = await getPokemons(25, 25 * page);
          const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
          });
          const results = await Promise.all(promises);
          setPokemons(results);
          setLoading(false);
          setTotal(Math.ceil(data.count / 25));
          setNotFound(false);
        } catch (err) {}
      };
    
      const loadFavoritePokemons = () => {
        const pokemons =
          JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
        setFavorites(pokemons);
      };
    
      useEffect(() => {
        loadFavoritePokemons();
      }, []);
    
      useEffect(() => {
        if (!searching) {
          fetchPokemons();
        }
      }, [page]);
    
      const updateFavoritePokemons = (name) => {
        const updated = [...favorites];
        const isFavorite = updated.indexOf(name);
        if (isFavorite >= 0) {
          updated.splice(isFavorite, 1);
        } else {
          updated.push(name);
        }
        setFavorites(updated);
        window.localStorage.setItem(localStorageKey, JSON.stringify(updated));
      };
    
      const onSearch = async (pokemon) => {
        if (!pokemon) {
          return fetchPokemons();
        }
        setLoading(true);
        setNotFound(false);
        setSearching(true);
        const result = await searchPokemon(pokemon);
        if (!result) {
          setNotFound(true);
          setLoading(false);
          return;
        } else {
          setPokemons([result]);
          setPage(0);
          setTotal(1);
        }
        setLoading(false);
        setSearching(false);
      };

    return (
        <div>
               <Topo>
             <BotaoMenu onClick={Favoritos}> Go Pokedex </BotaoMenu> 
                 </Topo>
  <FavoriteProvider
      value={{
        favoritePokemons: favorites,
        updateFavoritePokemons: updateFavoritePokemons
      }}
    >
      <div>
        <Navbar />
        <div className="App">
          <Searchbar onSearch={onSearch} />
          {notFound ? (
            <div className="not-found-text">
              Pokemon nao encontrado 😭
            </div>
          ) : (
            <Pokedex
              loading={loading}
              pokemons={pokemons}
              page={page}
              setPage={setPage}
              total={total}
            />
          )}
        </div>
        <Footer />
      </div>
    </FavoriteProvider>
          

         
        </div>
    );

};
