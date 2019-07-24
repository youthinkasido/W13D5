import React from 'react'
import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component {

    componentDidMount(){ //if component loads, do this
        this.props.requestAllPokemon()
    }
    
    render() {
        
        return (<div>
            <ul style={{listStyleType: 'none'}}>
            
            {this.props.pokemon_selector.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)}
               
            </ul>
        </div>)
    }

}

export default PokemonIndex;
                // {/* {this.props.pokemon_selector.map((pokemon, id) => (<li key={id}><img width='25px' height='25px' src={pokemon.image_url}></img> - {pokemon.name}</li>))} */}