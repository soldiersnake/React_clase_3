import React from "react";
import "./styles.css"; // Estilos opcionales para las tarjetas

export const Item = ({ pokemon }) => {
  return (
    <div className="item-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <h3>{pokemon.name}</h3>
      <p># {pokemon.id}</p>
      <p>Tipo: {pokemon.types}</p>
    </div>
  );
};
