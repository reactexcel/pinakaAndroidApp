import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigators/AppNavigator';

const firstAction = AppNavigator.router.getActionForPathAndParams('splash');
const initialNavState = AppNavigator.router.getStateForAction(firstAction);

function nav(state = initialNavState, action){
    let nextState;

    switch(action.type){
        default:
            nextState = AppNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

export default nav;