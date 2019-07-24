import {connect} from 'react-redux'
import PokemonDetail from './pokemon_detail'
import * as PokemonSelector from '../../reducers/selectors'


const mapStateToProps = (state) => ({
    details: {}
})

// const mapDispatchToProps = (dispatch) =>({
//     detail: {}
// })

// export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail)