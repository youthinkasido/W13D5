import { combineReducers } from 'redux';
import pokeReducer from './pokemon_reducer'
import itemsReducer  from './items_reducer'

const entitiesReducer = combineReducers({
    pokemonR: pokeReducer
 })

 export default entitiesReducer;