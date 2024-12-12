import React, { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

const ItemListContainerPokemon = () => {
  const [pokemons, setPokemons] = useState([]); // Estado para guardar los datos de los Pokémon
  const [loading, setLoading] = useState(true); // Estado para manejar el loading

  useEffect(() => {
    const fetchPokemons = async () => {
      setLoading(true);
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
      const data = await response.json();
      console.log('Data Pokemon :', data);
      

      // Obtener detalles individuales para cada Pokémon
      const detailedData = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          const pokemonDetails = await pokemonResponse.json();
          return {
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            types: pokemonDetails.types.map((type) => type.type.name).join(", "),
            image: pokemonDetails.sprites.front_default,
          };
        })
      );

      setPokemons(detailedData); // Guardar los Pokémon en el estado
      setLoading(false); // Terminar el loading
    };

    fetchPokemons();
  }, []);

  return (
    <div>
      <h1>Pokémon List</h1>
      {loading ? <p>Cargando...</p> : <ItemList pokemons={pokemons} />}
    </div>
  );
};

export default ItemListContainerPokemon;
