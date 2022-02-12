import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Axios from "axios";



export const Cardpokemon = () => {
    const history = useHistory();
    history.push("/Detalhes");
};


