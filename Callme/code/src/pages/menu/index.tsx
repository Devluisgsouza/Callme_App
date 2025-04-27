import React from "react";
import { Text, View, Image } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logoCallmeapp.png';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { ButtonMenu } from "../../components/Button";





export default function Menu(){

    const navigation = useNavigation<NavigationProp<any>>();
    
    async function criar_chamado(){
        navigation.navigate("Criar_chamado")
    }

    async function chamados(){
        navigation.navigate("chamados")
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
                    <Text style={style.title}>BEM VINDO!</Text>
                </View>

                <View style={style.blackSquareBig}>
                    <Text style={style.message}>A CALLME é integrada à Inteligência Artificial para fornecer a melhor solução para os seus problemas técnicos!</Text>
                </View>

            </View>

            <View style={style.boxFinal}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMenu text="CRIAR CHAMADO" onPress={() => criar_chamado()} />
                    <ButtonMenu text="VISUALIZAR CHAMADOS" onPress={() => chamados()} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <ButtonMenu text="PERFIL" onPress={() => perfil()} />
                    <ButtonMenu text="SAIR" onPress={() => sair()} />
                </View>
            </View>
      </View>

    )
}

