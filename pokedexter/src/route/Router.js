

import { HomePage } from "../pages/HomePage";
import { Pokedex } from "../pages/Pokedex";
import { Detalhes } from "../pages/Detalhes";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/Pokedex"}>
          <Pokedex />
        </Route>

        <Route exact path={"/Detalhes"}>
          <Detalhes />
        </Route>

      
      </Switch>
    </BrowserRouter>
  );
};
