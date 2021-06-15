import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonArray, setPokemonArray] = useState([])
  const [searchTerm, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
    .then(response => response.json())
    .then(pokemonData => setPokemonArray(pokemonData))
  }, [])

  function handleSearchChange (e) {
    setSearch(e.target.value)
  }

  function handlePokemonFormSubmit(newPokemon) {
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
    setPokemonArray([...pokemonArray, newPokemon])
  }

  const pokemonToDisplay = pokemonArray.filter((pokemon) => {
    if (searchTerm === "") return true;
    return pokemon.name.toUpperCase().includes(searchTerm.toUpperCase())
  })

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onPokemonFormSubmit={handlePokemonFormSubmit} />
      <br />
      <Search onSearchChange={handleSearchChange} searchTerm={searchTerm}/>
      <br />
      <PokemonCollection pokemonArray={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;
