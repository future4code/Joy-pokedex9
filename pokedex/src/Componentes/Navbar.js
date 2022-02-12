import React from "react";
import FavoriteContext from "../Context/Context";

const { useContext } = React;

const Navbar = () => {
  const { favoritePokemons } = useContext(FavoriteContext);

  let imgUrl =
    "https://lh3.googleusercontent.com/3TSaKxXGo2wT0lu0AyNUBnkk6wkCC2AzOhJyy3JXIPm-AmZ1k9DSAroWeBUyePswCZSs5lVp3mPF7HzUpY9VPlyOV5eddITONINr3WSqLNLm=e365-w600";

  return (
    <nav>
      <div />
      <div>
        <img src={imgUrl} alt="pokeapi-logo" className="navbar-image" />
      </div>
      <div>&#10084;&#65039; {favoritePokemons.length}</div>
    </nav>
  );
};

export default Navbar;
