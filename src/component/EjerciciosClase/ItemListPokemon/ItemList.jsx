import React from "react";
import { Item } from "./Item";
import "./styles.css"; // Estilos opcionales para la lista

export const ItemList = ({ pokemons }) => {
  return (
    <div className="item-list">
      {pokemons.map((pokemon) => (
        <Item key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
