import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addFavoriteMovie} from '../redux/actions';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function WishListButton(props) {
    const dispatch = useDispatch();
    const {favoritesList} = useSelector(state => state.favoritesReducer);

    const dispatchAddFavorite = (movie) => {
        dispatch(addFavoriteMovie(movie));
    };

    const addFavorite = (movie) => {
        dispatchAddFavorite(movie);
    };

    const isFavoriteExist = (movie) => {
        if (favoritesList.filter((item,i) => item.id === movie.id).length > 0) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <>
            <TouchableOpacity onPress={() => addFavorite(movie)}>
                <Icon name={isFavoriteExist(props.movieItem) ? 'favorite' : 'favorite-border'} color='#11CB46' size={28}/>
            </TouchableOpacity>
        </>
    );
}
