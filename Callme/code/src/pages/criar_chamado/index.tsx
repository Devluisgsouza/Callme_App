import React from "react";
import { Text, View } from 'react-native';
import { style } from './styles';




export default function Criar_chamado(){
    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text>Ola Criar Chamados</Text>

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

