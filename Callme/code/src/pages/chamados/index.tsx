import React from "react";
import { Text, View, ScrollView } from 'react-native';
import { style } from './styles';
import { ButtonChat } from '../../components/Button';
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
                <Text style={style.Textinicial}>CHAMADOS</Text>  
            </View>
            <View style={style.boxChat}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={style.TextChat}>FALE COM A IA DA CALLME</Text>
                    <ButtonChat 
                    icon={MaterialIcons} 
                    iconName="chat" 
                    onPress={() => getChat()}/>
                </View>
            </View>

            <View style={style.boxMid}>
                <ScrollView style={style.box1}>
                    <Text style={style.TextMid}>FINALIZADOS</Text>
                </ScrollView>
                <ScrollView style={style.box2}>
                    <Text style={style.TextMid}>EM ANDAMENTO</Text>
                </ScrollView>
                <ScrollView style={style.box3}>
                    <Text style={style.TextMid}>EM ESPERA</Text>
                </ScrollView>
            </View>

      </View>
     
    )
}
