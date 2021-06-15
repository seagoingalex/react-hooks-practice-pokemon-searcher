import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [displayFront, setDisplayDirection] = useState(true)
  
  const handleDisplayDirection = () => {
    setDisplayDirection(!displayFront)
  }


  return (
    <Card>
      <div onClick={handleDisplayDirection}>
        <div  className="image">
          <img src={displayFront ? pokemon.sprites.front : pokemon.sprites.back} alt={pokemon.name} />
        </div>
        <div className="content">
          <div className="header">{pokemon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
