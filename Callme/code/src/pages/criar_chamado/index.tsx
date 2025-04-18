import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';




export default function Perfil(){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>CRIAR CHAMADOS</Text>  
            </View>

            <View style={style.boxMid}>
                <Text>Ola Menu</Text>
            </View>

      </View>
     
    )
}