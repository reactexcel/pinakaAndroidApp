import { combineReducers } from 'redux';
import { AppNavigator } from '../navigators/AppNavigator';

import nav from './nav';
import user from './user';
import feed from './feed';
import saved from './saved';
import reservation from './reservation';
import interest from './interest';

const AppReducer = combineReducers({
    nav,
    user,
    feed,
    saved,
    reservation,
    interest
});

export default AppReducer;