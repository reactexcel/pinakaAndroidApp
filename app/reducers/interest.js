const initialInterestState = {
    list: []
};

function interest(state = initialInterestState, action){
    switch(action.type){
        case 'setinterest':
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}

export default interest;