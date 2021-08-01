import React from 'react';
import {FlatList, Text, ScrollView, Image, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import tailwind from 'tailwind-rn';
import {fonts} from '../assets/fonts-style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSelector} from 'react-redux';

function WishScreen(props) {

    const {favoritesList} = useSelector(state => state.favoritesReducer);
    console.log('wishscreen', favoritesList)

    const renderItem = ({item}) => {
        return (
            <View style={tailwind('flex-1 flex-row bg-white max-h-40')}>
                <View style={tailwind('flex-1')}>
                    <Image style={[{height: 150}, tailwind('w-full')]}
                           source={{uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`}}/>
                    <View style={tailwind('absolute bottom-0 mb-1 pb-2 pr-2 items-end self-end')}>
                        <Icon name="favorite" color="#11CB46" size={20}/>
                    </View>
                </View>
                <View style={tailwind('flex-1 p-2')}>
                    <Text style={{fontFamily: fonts.bold}}>{item.original_title}</Text>
                    <Text style={[{fontFamily: fonts.light}, tailwind('text-xs')]}>Date de
                        sortie: {item.release_date}</Text>
                    <View style={tailwind('flex-row')}>
                        <Icon name="thumb-up" color="#11CB46" size={20}/>
                        <Text style={[{fontFamily: fonts.bold}, tailwind('pl-2')]}>{item.vote_average}</Text>
                    </View>
                    <View style={tailwind('flex-1')}>
                        <Text style={tailwind('text-xs pt-2')}>
                            {item.overview.slice(0, 100)} [...]
                        </Text>
                    </View>
                </View>
            </View>
        )

    }


    return (
        <>
            <FlatList
                data={favoritesList}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            {/*<ScrollView style={tailwind('flex-1')}>*/}
            {/*    <View style={tailwind('flex-1 flex-row bg-white max-h-40')}>*/}
            {/*        <View style={tailwind('flex-1')}>*/}
            {/*            <Image style={[{height: 150}, tailwind('w-full')]}*/}
            {/*                   source={{uri: 'https://via.placeholder.com/300x500.png?text=Image+Test'}}/>*/}
            {/*            <View style={tailwind('absolute bottom-0 mb-1 pb-2 pr-2 items-end self-end')}>*/}
            {/*                <Icon name="favorite" color="#11CB46" size={20}/>*/}
            {/*            </View>*/}
            {/*        </View>*/}
            {/*        <View style={tailwind('bg-green-300 flex-1 p-2')}>*/}
            {/*            <Text style={{fontFamily: fonts.bold}}>Nom du film</Text>*/}
            {/*            <Text style={[{fontFamily: fonts.light}, tailwind('text-xs')]}>Date de sortie: 2021</Text>*/}
            {/*            <View style={tailwind('flex-row')}>*/}
            {/*                <Icon name="thumb-up" color="#11CB46" size={20}/>*/}
            {/*                <Text style={[{fontFamily: fonts.bold}, tailwind('pl-2')]}>4.5/10</Text>*/}
            {/*            </View>*/}
            {/*            <View style={tailwind('flex-1')}>*/}
            {/*                <Text style={tailwind('text-xs pt-2')}>*/}
            {/*                    {synopsis.slice(0,100)} [...]*/}
            {/*                </Text>*/}
            {/*            </View>*/}
            {/*        </View>*/}
            {/*    </View>*/}
            {/*</ScrollView>*/}
        </>
    );
};
export default withTheme(WishScreen);
