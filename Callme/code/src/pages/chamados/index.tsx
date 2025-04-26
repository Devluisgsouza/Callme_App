import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';
import { ButtonBack, ButtonChat } from '../../components/Button';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';



export default function Visualizar_chamados(){


    const navigation = useNavigation<NavigationProp<any>>();



    async function getBack(){
        navigation.reset({ routes: [{ name: "BottomRoutes" }] });
    }

    async function getChat(){
        navigation.navigate("Chat_IA")
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                {/* <View style={{ flexDirection: 'row', alignItems: 'center'}}> */}
                <ButtonBack 
                    icon={MaterialIcons} 
                    iconName="arrow_back" 
                    onPress={() => getBack()}/>
                <Text style={style.Textinicial}>CHAMADOS</Text>  
            {/* </View> */}
        </View>
            <View style={style.boxChat}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={style.TextChat}>CHAT COM IA</Text>
                    <ButtonChat 
                    icon={MaterialIcons} 
                    iconName="chat" 
                    onPress={() => getChat()}/>
                </View>
            </View>

            <View style={style.boxMid}>
                
            </View>

      </View>
     
    )
}


