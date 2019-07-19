import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer'

const rootReducer = combineReducers({
   entities : entitiesReducer
    // itemsR: itemsReducer
})


export default rootReducer;
