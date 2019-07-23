import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';

const pokemonReducer  = (state = {}, action) => {
    Object.freeze(state)
    let pokemon;
    let nextState = {};

    switch(action.type){
       case RECEIVE_ALL_POKEMON:
           return Object.assign({}, state, action.pokemon)
    default: 
        return state;
    }
}


export default pokemonReducer ;



// A thunk is a function that wraps an expression to delay its evaluation.
