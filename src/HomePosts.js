import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default class HomePosts extends React.Component {

    static navigationOptions = {
        title:'Posts',
        tabBarLabel:'Home',
        tabBarIcon:({focused, tintColor})=> {
            if(focused){
                return(
                    <Image source={require('../assets/images/home_azul.png')} style={styles.icone} />
                );
            }else{            
                return(
                    <Image source={require('../assets/images/home_preto.png')} style={styles.icone} />
                );
            }
        }
    }

    render(){
        return(
            <View>

            </View>
        );
    }

}

const styles = StyleSheet.create({
    icone:{
        width:26,
        height:26
    }
});