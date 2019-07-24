import React from 'react'
import { Link } from 'react-router-dom';
const PokemonIndexItem = ({pokemon}) => {
    return <div><Link to={`/pokemon/${pokemon.id}`}>
    <img height='25px' width='25px' src={pokemon.image_url}></img>{pokemon.name}
    </Link></div>
}

export default PokemonIndexItem;

import pokemonItem from './pokemon_detail_container'