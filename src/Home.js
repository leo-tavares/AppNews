import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import homeAzul from '../assets/images/home_azul.png';
import homePreto from '../assets/images/home_preto.png';

import HomeList from './HomeList';
import HomePosts from './HomePosts';

const Navegador = createStackNavigator({
    HomeList:{
        screen:HomeList
    },
    HomePosts:{
        screen:HomePosts
    }

});

Navegador.navigationOptions = {
    tabBarLabel:'Home',
    tabBarIcon:({focused, tintColor})=> {
        if(focused){
            return(
                <Image source={homeAzul} style={styles.icone} />
            );
        }else{            
            return(
                <Image source={homePreto} style={styles.icone} />
            );
        }
    }
}
export default Navegador;

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    }
});