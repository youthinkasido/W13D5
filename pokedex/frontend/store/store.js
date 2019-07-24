import rootReducer from '../reducers/root_reducer'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger' // destructured?


const configureStore = () => { 
    return createStore(
        rootReducer, // includes combinedReducers on entities and more
        applyMiddleware(thunk,logger)
    );
} //// store = {reducers, getState, dispatch, middleware(?)}


// store 
//     reducers 
//     preloadedState // 
//     middleware
//

export default configureStore;

//



