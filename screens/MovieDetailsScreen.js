import {ImageBackground, BackHandler, ScrollView, Text, View, ActivityIndicator} from 'react-native';
import React, {useEffect, useState} from 'react';
import tailwind from 'tailwind-rn';
import {withTheme} from 'react-native-paper';
import {fonts} from '../assets/fonts-style';
import axios from 'axios';

function MovieDetailsScreen(props) {
    const {item} = props.route.params;
    const {primary, title, flashyGreen} = props.theme.colors;
    const [isLoading, setIsLoading] = useState(true);
    const [director, setDirector] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${item.id}?api_key=318dc2bc4628a09c26291d2dbd0ca6b2&append_to_response=credits`);
            console.log(res)
            if (res.data) {
                const directorData = res.data.credits.crew.filter(item => item.job === 'Director');
                setDirector(directorData[0]);
                setIsLoading(false);
            } else {
                console.log('pas de data');
            }
        };
        fetchData();
    }, [setDirector]);

    return (
        <>
            {!isLoading ?
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
                        }, tailwind('text-lg pt-2 border-b-2')]}>Réalisateur</Text>
                        <Text style={[{color: primary}, tailwind('pt-2')]}>{director.name}</Text>
                        <Text style={[{
                            color: primary,
                            width: 150,
                            borderColor: flashyGreen,
                            fontFamily: fonts.bold,
                        }, tailwind('text-lg pt-2 border-b-2')]}>Synopsis</Text>
                        <Text style={[{color: primary}, tailwind('pt-2')]}>{item.overview}</Text>
                    </ScrollView></> :
                <View style={tailwind('flex-1 justify-center')}>
                    <ActivityIndicator size="large" color={flashyGreen}/>
                </View>}
        </>
    );
}

export default withTheme(MovieDetailsScreen);
