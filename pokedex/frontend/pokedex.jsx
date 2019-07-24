import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import { Provider } from 'react-redux';
import PokemonIndexContainer from './components/pokemon/pokemon_index_container'
import { HashRouter, Route } from 'react-router-dom'

// import * as pokemonActions from './actions/pokemon_actions'
import * as APIUtil from './util/api_util'
// import Root from './components/root'

const Root = ( {store} ) => {
    return <Provider store={store}>
        <div>Root Level Component</div>
        <HashRouter>
            <Route path="/" component={PokemonIndexContainer}/>
        </HashRouter>

    </Provider>
};
// /PokemonIndexContainer


// export default Root;

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let store = configureStore();
    window.store = store
    window.api = APIUtil
    ReactDOM.render(<Root store={store}/>, rootEl);

    
});







