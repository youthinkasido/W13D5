import * as APIUtil from '../util/api_util'
export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export const receiveAllPokemon = pokemon => ({
  type: RECEIVE_ALL_POKEMON,
  pokemon: pokemon
})

export const receivePokemon = pokemon => ({
  type: RECEIVE_POKEMON,
  pokemon: pokemon
})


export const requestAllPokemon = () => (dispatch) => (
    APIUtil.fetchAllPokemon()/// 
      .then(pokemon => dispatch(receiveAllPokemon(pokemon))) // action object of all pokemon inside
  )

export const requestPokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(({pokemon})=>dispatch(receivePokemon(pokemon)))
)

window.requestPokemon = requestPokemon