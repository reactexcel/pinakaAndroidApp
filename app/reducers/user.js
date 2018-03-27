const initialUserState = {
    token: null,
    isLogged: false,
    interests: null,
    phone: null,
    type: null,
    contact_source: null,
    kids: null,
    marital: null,
    gender: null,
    zipcode: null,
    birthday: null,
    email: null,
    name: null,
    creditcards: null
};

function user(state = initialUserState, action){
    switch(action.type){
        case 'logout':
            return {
                ...state,
                token: null,
                isLogged: false,
                interests: null,
                phone: null,
                type: null,
                contact_source: null,
                kids: null,
                marital: null,
                gender: null,
                zipcode: null,
                birthday: null,
                email: null,
                name: null,
                creditcards: null
            };
        case 'setprofile':
            return {
                ...state,
                isLogged: true,
                token: action.data.token,
                interests: action.data.interests,
                phone: action.data.phone,
                type: action.data.type,
                contact_source: action.data.contact_source,
                kids: action.data.kids,
                marital: action.data.marital,
                gender: action.data.gender,
                zipcode: action.data.zipcode,
                birthday: action.data.birthday,
                email: action.data.email,
                name: action.data.name,
                creditcards: action.data.creditcards
            }
        case 'changecreditcards':
            return {
                ...state,
                creditcards: action.data
            }
        default: 
            return state;
    }
}

export default  user;