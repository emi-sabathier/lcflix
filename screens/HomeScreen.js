import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity, ActivityIndicator, Text, View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Card, withTheme} from 'react-native-paper';
import {fonts} from '../assets/fonts-style';
import axios from 'axios';
import tailwind from 'tailwind-rn';
import WishListButton from '../components/WishListButton';

function HomeScreen(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [heroMovie, setHeroMovie] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [moviesList, setMoviesList] = useState([]);
    const {width: screenWidth, height: screenHeight} = Dimensions.get('window');

    const navigation = useNavigation();
    const ref = useRef(null);

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

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => onPressCarousel()}>
            <View style={tailwind('self-center h-5/6 w-5/6 mt-3 bg-white')}>
                <View style={{backgroundColor: '#11CB46', height: 2}} />
                <View style={tailwind('flex-1')}>
                    <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
                                     resizeMode="cover" style={tailwind('w-full flex-1 justify-end')}>
                    </ImageBackground>
                </View>
                <View style={tailwind('flex-row bg-white rounded-b-lg pl-3')}>
                    <Text style={[{
                        color: title,
                        fontFamily: fonts.bold,
                    }, tailwind('flex-1 text-sm leading-10 text-left')]}>{item.original_title}
                    </Text>
                    <View style={tailwind('pr-3 items-end self-center')}>
                        <WishListButton/>
                    </View>
                </View>
                {/*<Card>*/}
                {/*    <Text>test</Text>*/}
                {/*    <Card.Cover source={{ uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}` }} />*/}
                {/*</Card>*/}
                {/*<Text style={tailwind('text-2xl')}>{item.title}</Text>*/}
            </View>
        </TouchableOpacity>
    );

    const {primary, title} = props.theme.colors;
    const {activeDot, inactiveDot} = props.theme.slider;
    return (
        <>
            <View style={tailwind('flex-1')}>
                {!isLoading ?
                    <>
                        <View style={{backgroundColor: '#11CB46', height: 2}} />
                        <View style={tailwind('flex-1')}>
                            <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${heroMovie.backdrop_path}`}}
                                             resizeMode="cover" style={tailwind('flex-1 justify-end')}>
                                <Text style={[{
                                    color: primary,
                                    fontFamily: fonts.bold,
                                    backgroundColor: "#000000c0"
                                }, tailwind('w-full absolute bottom-0 flex-1 text-3xl leading-10 text-center')]}>{heroMovie.original_title}
                                </Text>
                                <View style={tailwind('flex-row rounded-b-lg pl-3')}>
                                    <View style={tailwind('flex-1 mb-1 items-end self-center')}>
                                        <WishListButton/>
                                    </View>
                                </View>
                            </ImageBackground>
                        </View>

                        <View style={tailwind('flex-1')}>
                            <Text style={[{color: primary, fontFamily: fonts.bold}, tailwind('px-3 pt-2 text-left text-lg')]}>Les plus
                                populaires</Text>
                            <Text style={[{fontFamily: fonts.light, color: primary},tailwind('px-3 opacity-60')]}>Les films les plus populaires du moment</Text>
                            <Carousel
                                ref={ref}
                                data={moviesList}
                                renderItem={renderItem}
                                onSnapToItem={index => setActiveSlide(index)}
                                sliderWidth={screenWidth}
                                sliderHeight={screenHeight}
                                itemWidth={screenWidth}
                            />
                            <Pagination
                                dotsLength={moviesList.length}
                                activeDotIndex={activeSlide}
                                containerStyle={{marginTop: 10, paddingVertical: 8}}
                                dotStyle={activeDot}
                                inactiveDotStyle={inactiveDot}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
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
