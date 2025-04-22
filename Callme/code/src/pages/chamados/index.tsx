import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';
import { ButtonChat } from '../../components/Button';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';



export default function Visualizar_chamados(){


    const navigation = useNavigation<NavigationProp<any>>();

    async function getChat(){
        navigation.navigate("Chat_IA")
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>CHAMADOS</Text>  
            </View>

            <View style={style.boxMid}>
                <ButtonChat 
                icon={MaterialIcons} 
                iconName="chat" 
                onPress={() => getChat()}/>
            </View>

      </View>
     
    )
}


