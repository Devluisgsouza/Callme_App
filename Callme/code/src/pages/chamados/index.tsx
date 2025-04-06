import React from "react";
import { Text, View } from 'react-native';
import { style } from './styles';




export default function Visualizar_chamados(){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text>Ola Visu Chamados</Text>

            </View>

            <View style={style.boxMid}>
                <Text>Ola Menu</Text>

            </View>

            <View style={style.boxFinal}>
                <Text>Ola Menu</Text>

            </View>
      </View>

      
        
    )
}


