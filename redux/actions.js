export const ADD_FAVORITE_MOVIE = 'ADD_FAVORITE_MOVIE';

export const addFavoriteMovie = (movie) => dispatch => {
    console.log('action movie',movie)
    dispatch({
        type: ADD_FAVORITE_MOVIE,
        payload: movie,
    });
};
