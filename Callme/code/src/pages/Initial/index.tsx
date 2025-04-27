import React, {useState} from "react";
import { Text,View,Image } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logoCallmeapp.png';
import { Button, ButtonText } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';








export default function Inicial() {


                
    const navigation = useNavigation<NavigationProp<any>>();


    async function getEntrar() {
        navigation.navigate('Login');
    }


    async function getcriar() {
        navigation.navigate('criar_login');
    }


    return(
        <View style={style.container}>
            <View style={style.Box}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"      
                />

                <Text style={style.Title}>CALLME APP</Text>
                <Text style={style.SubTitle}>A SOLUÇÃO PARA OS SEUS PROBLEMAS TÉCNICO</Text>
                <View style={{marginTop: 80}}>
                    <Button text="ENTRAR" onPress={() => getEntrar()} />
                </View>
                <View style={{marginTop: -20}}>
                    <ButtonText text="CRIAR CONTA" onPress={() => getcriar()} />            
                </View>
            </View> 
        </View>
    )

}
