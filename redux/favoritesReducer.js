import {ADD_FAVORITE_MOVIE, DELETE_FAVORITE_MOVIE} from './actions';

const initialState = {
    favoritesList: [],
};

export default function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_FAVORITE_MOVIE:
            return {
                ...state,
                favoritesList: [...state.favoritesList, action.payload],
            };
        case DELETE_FAVORITE_MOVIE:
            return {
                ...state,
                favoritesList: state.favoritesList.filter(
                    movie => movie.id !== action.payload.id,
                ),
            };
        default:
            return state;
    }
}
