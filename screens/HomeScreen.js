import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text, View, ImageBackground} from 'react-native';
import {withTheme} from 'react-native-paper';
import {fonts} from '../assets/fonts-style';
import axios from 'axios';
import tailwind from 'tailwind-rn';
import WishListButton from '../components/WishListButton';

function HomeScreen(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [heroMovie, setHeroMovie] = useState([]);
    const [moviesList, setMoviesList] = useState([]);

    useEffect(async () => {
        await axios.get('https://api.themoviedb.org/3/movie/10699?api_key=318dc2bc4628a09c26291d2dbd0ca6b2')
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                setHeroMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=318dc2bc4628a09c26291d2dbd0ca6b2&language=fr&page=1')
            .then((res) => {
                setIsLoading(false);
                let lastFiveMovies = res.data.results.slice(0,5).map(movie => movie);
                setMoviesList(lastFiveMovies);
            })
    }, []);
    const {primary, title} = props.theme.colors;
    return (
        <>
            <View style={tailwind('flex-1')}>
                {!isLoading ?
                    <>
                        <View style={tailwind('flex-1')}>
                            <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${heroMovie.poster_path}`}}
                                             resizeMode="cover" style={tailwind('flex-1 justify-end')}>
                            </ImageBackground>
                        </View>
                        <View style={tailwind('flex-row bg-white rounded-b-lg px-3')}>
                            <Text style={[{
                                color: title,
                                fontFamily: fonts.bold,
                            }, tailwind('flex-1 text-2xl leading-10 text-left')]}>{heroMovie.original_title}
                            </Text>
                            <View style={tailwind('flex-1 items-end self-center')}>
                                <WishListButton/>
                            </View>
                        </View>
                        <View style={tailwind('flex-1')}>
                            <Text style={[{
                                color: primary,
                                fontFamily: fonts.bold,
                            }, tailwind('text-2xl text-center')]}>{heroMovie.original_title}</Text>
                        </View>
                    </> :
                    <View style={tailwind('flex-1 justify-center')}>
                        <ActivityIndicator size="large" color="#11CB46"/>
                    </View>}
            </View>
        </>
    );
}

export default withTheme(HomeScreen);
