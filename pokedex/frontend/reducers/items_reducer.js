
const itemsReducer = (state = {}, action) => {
    Object.freeze(state)
    let items;
    let nextState = {};

    switch (action.type) {
        // case ALL_ITEMS:
        //     return nextState = Object.assign({}, state) //
        default: return state;
    }
}

export default itemsReducer;