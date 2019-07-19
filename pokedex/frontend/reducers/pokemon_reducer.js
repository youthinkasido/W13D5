
const pokeReducer = (state = {}, action) => {
    Object.freeze(state)
    let pokemon;
    let nextState = {};

    switch(action.type){
        // case ALL_POKEMON: 
        // return nextState = Object.assign({}, state) //
        default: return state;
    }
}


export default pokeReducer;