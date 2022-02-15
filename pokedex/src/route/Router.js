

import { HomePage } from "../pages/HomePage";
import { Favoritos } from "../pages/Favoritos";
import { Detalhes } from "../pages/Detalhes";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/Favoritos"}>
          <Favoritos />
        </Route>

        <Route exact path={"/Detalhes"}>
          <Detalhes />
        </Route>

      
      </Switch>
    </BrowserRouter>
  );
};
