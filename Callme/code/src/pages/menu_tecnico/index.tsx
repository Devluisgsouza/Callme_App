import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logoCallmeapp.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ButtonMenu } from "../../components/Button";





export default function Menu_Tecnico(){

    const navigation = useNavigation<NavigationProp<any>>();
    

    async function chamados(){
        navigation.navigate("chamados_tecnico")
    }
    
    async function atender_chamado(){
        navigation.navigate("atender_chamado")
    }

    async function perfil(){
        navigation.navigate("perfil")
    }

    async function sair(){
        navigation.navigate("Login")
    }


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
                    <Text style={style.message}>A CALLME é integrada à Inteligência Artificial para fornecer o melhor suporte para os seus atendimentos técnicos!</Text>
                </View>

            </View>

            <View style={style.boxFinal}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMenu text="VISUALIZAR CHAMADOS" onPress={() => chamados()} />
                    <ButtonMenu text="ATENDER CHAMADOS" onPress={() => atender_chamado()} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMenu text="PERFIL" onPress={() => perfil()} />
                    <ButtonMenu text="SAIR" onPress={() => sair()} />
                </View>
            </View>
      </View>

    )
}

