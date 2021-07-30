import {ADD_FAVORITE_MOVIE} from './actions';

const initialState = {
    favorites: [],
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            return {...state, favorites: [...state.favorites, action.payload]};
        default:
            return state;
    }
}
