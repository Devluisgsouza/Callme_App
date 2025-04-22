import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';




export default function Atender_chamados(){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>ATENDER CHAMADOS</Text>  
            </View>

            <View style={style.boxMid}>
                <Text>Ola Menu</Text>
            </View>

      </View>
     
    )
}


