import {connect} from 'react-redux'
import PokemonIndex from './pokemon_index'
import * as PokemonSelector from '../../reducers/selectors'
import {requestAllPokemon} from '../../actions/pokemon_actions'

const mapStateToProps = (state) => ({// takes in all of state, returns slice of state to props for current comp, particular format
    pokemon_selector: PokemonSelector.selectAllPokemon(state)
})

const mapDispatchToProps = (dispatch) =>({//ready for a change to the store
    requestAllPokemon: ()=>dispatch(requestAllPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex)