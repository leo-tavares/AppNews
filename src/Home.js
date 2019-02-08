import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

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

const AppContainer = createAppContainer(Navegador);
export default AppContainer;
