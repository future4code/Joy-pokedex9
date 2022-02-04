import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";
import { BASE_URL } from '../constants/url'


const Topo = styled.div`
background-size: 5%;

background-image: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f22394df-9a75-4771-8225-ea50370155c7/d4mh7q5-25a47434-05e7-413b-9934-7c555ab034e8.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YyMjM5NGRmLTlhNzUtNDc3MS04MjI1LWVhNTAzNzAxNTVjN1wvZDRtaDdxNS0yNWE0NzQzNC0wNWU3LTQxM2ItOTkzNC03YzU1NWFiMDM0ZTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.o5MBcxD2GF6ZtvOpSmq2UBuRQ7wTjHLNgYN2f8AOyUU");
margin: 0;
padding:0;
width: 100vw;
height: 7vh;
display:flex;
/* justify-content: space-evenly; */

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
        background:#red;
        border: 2% solid #2277ff;
     
    }
    :active{
        background:gray;
        color: #FDFDFD;
        border: 2% solid #FDFDFD;
    }
    
`


export const HomePage = () => {
    const history = useHistory();

    const Pokedex = () => {
        history.push("/Pokedex");
    };
    //   useEffect(()=> {
    // Axios.get(BASE_URL)
    // .then((res)=>{

    // })
    // .catch((err)=>{
    //     console.log(err)
    // })
    // }, []) 




    return (
        <div>
         
             <Topo>
             <BotaoMenu onClick={Pokedex}> Go Pokedex </BotaoMenu> 
                 </Topo>
                 <h1>Lista de pokemons por perto</h1>
            
            
            
           
            

         
        </div>
    );

};
