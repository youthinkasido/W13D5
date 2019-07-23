import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
})


export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()
      .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
  )

// export const fetch() {
//     return function(dispatch){
//         return APIUtil.fetchAllPokemon().then(pokemon=>{
//             dispatch(receiveAllPokemon(pokemon)).catch(e=>{throw(e)});
//         })
//     }
// }
