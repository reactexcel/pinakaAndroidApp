const initialReservationState = {
    list: [],
    history:[]
};

function reservation(state = initialReservationState, action){
    switch(action.type){
        case 'setreservation':
            return {
                ...state,
                list: action.data
            };
        case 'sethistory':
            return {
                ...state,
                history: action.data
            };
        default:
            return state;
    }
}

export default reservation;