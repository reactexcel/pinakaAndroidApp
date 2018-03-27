const initialReservationState = {
    list: []
};

function reservation(state = initialReservationState, action){
    switch(action.type){
        case 'setreservation':
            return {
                ...state,
                list: action.data
            };
        default:
            return state;
    }
}

export default reservation;