import React, {useEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addFavoriteMovie, deleteFavoriteMovie} from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WishListButton(props) {
    const dispatch = useDispatch();
    const {favoritesList} = useSelector(state => state.favoritesReducer);

    useEffect(() => {
    }, []);
    // update redux store, add movie
    const dispatchAddFavorite = (movie) => {
        dispatch(addFavoriteMovie(movie));
    };

    // update redux store, delete movie
    const dispatchDeleteFavorite = (movie) => {
        dispatch(deleteFavoriteMovie(movie));
    };

    const addFavorite = (movie) => {
        dispatchAddFavorite(movie);
    };

    const deleteFavorite = (movie) => {
        dispatchDeleteFavorite(movie);
    };

    const isFavoriteExist = (movie) => {
        if (favoritesList.filter((item) => item.id === movie.id).length > 0) {
            return true;
        } else {
            return false;
        }
    };
    return (
        <>
            <TouchableOpacity key={props.movieItem.id} onPress={() => {
                isFavoriteExist(props.movieItem) ? deleteFavorite(props.movieItem) : addFavorite(props.movieItem);
            }}>
                <Icon name={isFavoriteExist(props.movieItem) ? 'favorite' : 'favorite-border'}
                      color='#11CB46' size={28}/>
            </TouchableOpacity>
        </>
    );
}
