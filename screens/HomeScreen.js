import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, ActivityIndicator, Text, View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import {withTheme} from 'react-native-paper';
import {fonts} from '../assets/fonts-style';
import axios from 'axios';
import tailwind from 'tailwind-rn';
import WishListButton from '../components/WishListButton';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function HomeScreen(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [heroMovie, setHeroMovie] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [moviesList, setMoviesList] = useState([]);
    const navigation = useNavigation();
    const ref = useRef(null);
    const {primary, title, flashyGreen} = props.theme.colors;

    useEffect(async () => {
        await axios.get('https://api.themoviedb.org/3/movie/10699?api_key=318dc2bc4628a09c26291d2dbd0ca6b2')
            .then((res) => {
                setIsLoading(false);
                setHeroMovie(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=318dc2bc4628a09c26291d2dbd0ca6b2&language=fr&page=1')
            .then((res) => {
                setIsLoading(false);
                let lastFiveMovies = res.data.results.slice(0, 5).map(movie => movie);
                setMoviesList(lastFiveMovies);
            });
    }, []);

    const onPressCarousel = () => {
        navigation.navigate('MovieDetails');
    };

    const renderItem = useCallback(({item}) => {
        return (
            <TouchableWithoutFeedback onPress={() => onPressCarousel()}>
                <View
                    style={[{
                        height: 180,
                        padding: 5,
                    }, tailwind('bg-white mx-6 rounded-lg')]}
                >
                    <View style={tailwind('flex-1')}>
                        <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
                                         resizeMode="cover" style={tailwind('w-full flex-1 justify-end')}>
                        </ImageBackground>
                    </View>
                    <View style={tailwind('flex-row bg-white pt-2')}>
                        <Text style={[{
                            color: title,
                            fontFamily: fonts.bold,
                        }, tailwind('flex-1 text-sm leading-5 text-left')]}>{item.original_title}
                        </Text>
                        <View style={tailwind('pr-3 items-end self-center')}>
                            <WishListButton/>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }, []);

    return (
        <>
            <View style={tailwind('flex-1')}>
                {!isLoading ?
                    <>
                        <View style={{height: 3, backgroundColor: flashyGreen}}/>
                        <View style={tailwind('flex-1')}>
                            <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${heroMovie.backdrop_path}`}}
                                             resizeMode="cover" style={tailwind('flex-1 justify-end')}>
                                <Text style={[{
                                    color: primary,
                                    fontFamily: fonts.bold,
                                    backgroundColor: '#000000c0',
                                }, tailwind('w-full absolute bottom-0 flex-1 text-3xl leading-10 text-center')]}>{heroMovie.original_title}
                                </Text>
                                <View style={tailwind('flex-row')}>
                                    <View style={tailwind('flex-1 mb-1 pr-5 items-end self-center')}>
                                        <WishListButton/>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={tailwind('flex-1')}>
                            <Text style={[{
                                color: primary,
                                fontFamily: fonts.bold,
                            }, tailwind('px-5 pt-2 text-left text-lg')]}>Le top 5</Text>
                            <Text style={[{fontFamily: fonts.light, color: primary}, tailwind('px-5 pb-3 opacity-60')]}>Les
                                films les plus populaires</Text>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                <Carousel
                                    layout={'default'}
                                    ref={ref}
                                    data={moviesList}
                                    sliderWidth={300}
                                    itemWidth={300}
                                    renderItem={renderItem}
                                    onSnapToItem={(index) => setActiveSlide(index)}
                                />
                            </View>
                        </View>
                    </> :
                    <View style={tailwind('flex-1 justify-center')}>
                        <ActivityIndicator size="large" color={flashyGreen}/>
                    </View>}
            </View>
        </>
    );
}
export default withTheme(HomeScreen);
