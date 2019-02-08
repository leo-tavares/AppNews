import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import Contato from './src/Contato';
import Horarios from './src/Horarios';
import Sobre from './src/Sobre';

const Navegador = createBottomTabNavigator({
  Home:{
    screen:Home
  },
  Contato:{
    screen:Contato
  },
  Horarios:{
    screen:Horarios
  },
  Sobre:{
    screen:Sobre
  }
});

const AppContainer = createAppContainer(Navegador);
export default AppContainer;