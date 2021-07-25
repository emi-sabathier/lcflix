import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Dimensions, TouchableOpacity, ActivityIndicator, Text, View, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {withTheme} from 'react-native-paper';
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

    const onPressCarousel = () => {
        navigation.navigate('MovieDetails');
    };

    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => onPressCarousel()}>
            <View
                style={{
                    backgroundColor: 'floralwhite',
                    borderRadius: 5,
                    height: 250,
                    padding: 50,
                    marginLeft: 25,
                    marginRight: 25,
                }}
            >
                <Text style={{fontSize: 30}}>{item.title}</Text>
                <Text>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );

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
    const {primary, title} = props.theme.colors;
    const {activeDot, inactiveDot} = props.theme.slider;
    console.log(activeDot);
    console.log(inactiveDot);
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
                                dotsLength={moviesList.length} // also based on number of sildes you want
                                activeDotIndex={activeSlide}
                                containerStyle={{paddingVertical: 8}}
                                dotStyle={activeDot}
                                inactiveDotStyle={inactiveDot}
                                inactiveDotOpacity={0.4}
                                inactiveDotScale={0.6}
                            />
                            {/*<Carousel*/}
                            {/*    layout="default"*/}
                            {/*    ref={ref}*/}
                            {/*    data={moviesList}*/}
                            {/*    sliderWidth={300}*/}
                            {/*    itemWidth={300}*/}
                            {/*    renderItem={renderItem}*/}
                            {/*    onSnapToItem={(index) => setActiveIndex(index)}*/}
                            {/*/>*/}

                        </View>
                        {/*<View style={tailwind('flex-1')}>*/}
                        {/*    <Text style={[{*/}
                        {/*        color: primary,*/}
                        {/*        fontFamily: fonts.bold,*/}
                        {/*    }, tailwind('text-2xl text-center')]}>{heroMovie.original_title}</Text>*/}
                        {/*</View>*/}
                    </> :
                    <View style={tailwind('flex-1 justify-center')}>
                        <ActivityIndicator size="large" color="#11CB46"/>
                    </View>}
            </View>
        </>
    );
}

export default withTheme(HomeScreen);
