const initialSavedState = {
    list: []
};

function saved(state = initialSavedState, action){
    switch(action.type){
        case 'setsaved':
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}

export default saved;