import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonArray }) {
  return (
    <Card.Group itemsPerRow={6}>
      {pokemonArray.map(pokemon => <PokemonCard key={pokemon.id} pokemon={pokemon}/>)}
    </Card.Group>
  );
}

export default PokemonCollection;
