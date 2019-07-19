import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js'
import { Provider } from 'react-redux';

const Root = ({ store }) => ( // why the curly braces yo?
    <Provider store={store}>
    </Provider>
);

// export default Root;

document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    let store = configureStore();
    window.store = store
    ReactDOM.render(<Root store={store}/>, rootEl);
});


