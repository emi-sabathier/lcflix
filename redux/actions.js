export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';

export const addFavoriteMovie = movie => dispatch => {
    dispatch({
        type: ADD_FAVORITE_MOVIE,
        payload: movie,
    });
};
