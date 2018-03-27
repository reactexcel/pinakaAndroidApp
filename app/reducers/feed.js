const initialFeedState = {
    list: []
};

function feed(state = initialFeedState, action){
    switch(action.type){
        case 'setfeed':
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}

export default feed;