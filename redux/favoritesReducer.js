import {ADD_FAVORITE_MOVIE} from './actions';

const initialState = {
    favoritesList: [],
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            return {...state, favoritesList: [...state.favoritesList, action.payload]};
        default:
            return state;
    }
}
