import React from 'react';
import {Text, ScrollView, Image, View} from 'react-native';
import {withTheme} from 'react-native-paper';
import tailwind from 'tailwind-rn';
import {fonts} from '../assets/fonts-style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WishListButton from '../components/WishListButton';

function WishScreen(props) {
    const synopsis = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel iaculis magna, non porta ante. Praesent convallis leo ex, sit amet eleifend mauris hendrerit id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin aliquam hendrerit nisi, sit amet hendrerit tortor. Curabitur orci massa, facilisis vitae cursus in, sollicitudin ut metus. Cras nunc metus, auctor vitae turpis quis, lacinia dapibus tortor. Nam porta ligula turpis, eu sollicitudin velit interdum non. Quisque scelerisque id elit ac dignissim. Etiam nec dui ut sem elementum elementum. Curabitur a augue eget risus fringilla euismod non nec dui.';

    const {primary, title, flashyGreen} = props.theme.colors;
    return (
        <>
            <ScrollView style={tailwind('flex-1')}>
                <View style={tailwind('flex-1 flex-row bg-white max-h-40')}>
                    <View style={tailwind('flex-1')}>
                        <Image style={[{height: 150}, tailwind('w-full')]}
                               source={{uri: 'https://via.placeholder.com/300x500.png?text=Image+Test'}}/>
                        <View style={tailwind('absolute bottom-0 mb-1 pb-2 pr-2 items-end self-end')}>
                            <WishListButton/>
                        </View>
                    </View>
                    <View style={tailwind('bg-green-300 flex-1 p-2')}>
                        <Text style={{fontFamily: fonts.bold}}>Nom du film</Text>
                        <Text style={[{fontFamily: fonts.light}, tailwind('text-xs')]}>Date de sortie: 2021</Text>
                        <View style={tailwind('flex-row')}>
                            <Icon name="thumb-up" color="#11CB46" size={20}/>
                            <Text style={[{fontFamily: fonts.bold}, tailwind('pl-2')]}>4.5/10</Text>
                        </View>
                        <View style={tailwind('flex-1')}>
                            <Text style={tailwind('text-xs pt-2')}>
                                {synopsis.slice(0,100)} [...]
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};
export default withTheme(WishScreen);
