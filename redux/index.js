import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import favoritesReducer from './favoritesReducer';
const reducers = combineReducers({favoritesReducer});
export const store = createStore(reducers, applyMiddleware(thunk));
console.log('log index',store.getState())
