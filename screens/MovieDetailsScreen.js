import {Text, ImageBackground, Image, View, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import tailwind from 'tailwind-rn';
import {Divider, withTheme} from 'react-native-paper';
import {fonts} from '../assets/fonts-style';
import WishListButton from '../components/WishListButton';
import Carousel from 'react-native-snap-carousel';
import axios from 'axios';

function MovieDetailsScreen(props) {
    // const {primary, title, flashyGreen} = props.theme.colors;
    console.log(props.route.params.item);
    const {item} = props.route.params;
    const {primary, title, flashyGreen} = props.theme.colors;
    const [director, setDirector] = useState([]);

    useEffect(async () => {
        await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=318dc2bc4628a09c26291d2dbd0ca6b2&append_to_response=credits`)
            .then(res => {
                const directorData = res.data.credits.crew.filter(item => item.job === 'Director');
                setDirector(directorData);
                console.log(director)
            })
            .catch(err => {
                console.log(err);
            });
    },[director]);

    return (
        <>
            <View style={tailwind('flex-1')}>
                <ImageBackground source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}
                                 resizeMode="cover"
                                 style={tailwind('flex-1 justify-end')}>
                    <Text style={[{
                        color: primary,
                        fontFamily: fonts.bold,
                        backgroundColor: '#000000c0',
                    }, tailwind('w-full absolute bottom-0 flex-1 text-3xl leading-10 text-center')]}>{item.title}
                    </Text>
                </ImageBackground>
            </View>
            <ScrollView style={tailwind('flex-1 px-5')}>
                <Text style={[{
                    color: primary,
                    width: 150,
                    borderColor: flashyGreen,
                    fontFamily: fonts.bold,
                },tailwind('text-lg py-2 border-b-2')]}>Réalisateur</Text>
                <Text style={{color: flashyGreen}}>{director.name}</Text>
                <Text style={[{
                    color: primary,
                    width: 150,
                    borderColor: flashyGreen,
                    fontFamily: fonts.bold,
                }, tailwind('text-lg py-2 border-b-2')]}>Synopsis</Text>
                <Text style={{color: primary}}>{item.overview}</Text>
            </ScrollView>
        </>
    );
}

export default withTheme(MovieDetailsScreen);
