import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png';




export default function Menu(){
    
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"     
                />
            </View>

            <View style={style.boxMid}>
                <View style={style.blackSquare}>
                    <Text style={style.title}>Bem vindo!</Text>
                </View>

                <View style={style.blackSquareBig}>
                    <Text style={style.message}>Para criar e visualizar seus chamados, acesse as abas correspondentes</Text>
                </View>

            </View>

            <View style={style.boxFinal}>
                <Text>Ola Menu</Text>

            </View>
      </View>

    )
}

