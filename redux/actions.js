export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';
export const DELETE_FAVORITE_MOVIE = 'DELETE_FAVORITE_MOVIE';

export const addFavoriteMovie = (movie) => dispatch => {
    dispatch({
        type: ADD_FAVORITE_MOVIE,
        payload: movie,
    });
};

export const deleteFavoriteMovie = (movie) => dispatch => {
    dispatch({
        type: DELETE_FAVORITE_MOVIE,
        payload: movie,
    });
};
