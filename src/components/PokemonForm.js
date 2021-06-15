import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onPokemonFormSubmit }) {
  const [pokemonName, setPokemonName] = useState("")
  const [pokemonHp, setPokemonHp] = useState("")
  const [pokemonFront, setPokemonFront] = useState("")
  const [pokemonBack, setPokemonBack] = useState("")

  function pokemonSubmit (e) {
    e.preventDefault();
    const newPokemon = {
      name: pokemonName,
      hp: pokemonHp,
      sprites: {
        front: pokemonFront,
        back: pokemonBack
      }
    }
    onPokemonFormSubmit(newPokemon)
    setPokemonName("")
    setPokemonHp("")
    setPokemonFront("")
    setPokemonBack("")
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          pokemonSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input 
            fluid label="Name" 
            placeholder="Name" 
            name="name" 
            value={pokemonName} 
            onChange={e => setPokemonName(e.target.value)}/>
          <Form.Input 
            fluid label="hp" 
            placeholder="hp" 
            name="hp"
            value={pokemonHp}
            onChange={e => setPokemonHp(e.target.value)} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={pokemonFront}
            onChange={e => setPokemonFront(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={pokemonBack}
            onChange={e => setPokemonBack(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
