import React, {useState} from "react";
import { Text,View,Image,Alert } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/login.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { Input } from "../../components/input";
import { Button, ButtonText } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';




export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true)

            if(email === '' || password === ''){
                return Alert.alert('ATENÇÃO','Preencha os campos obrigatórios!')
            }


            setTimeout(() => {
                if(email == 'funcionario@teste.com' && password == 'senha'){
                    Alert.alert('Login realizado com sucesso!')
                    navigation.navigate("BottomRoutes")
                }else{
                    Alert.alert('ATENÇÃO','Usuário ou senha inválidos!')
                }
            })

            
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }    
    }

    async function getcriar(){
        navigation.navigate("Criar_login")
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"     
                />
                <Text style={style.text}>Bem vindo de volta!</Text>                    
            </View>
            <View style={style.boxMid}>
                <Input
                    value = {email}
                    onChangeText={setEmail}
                    title = "ENDEREÇO DE EMAIL"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title = "SENHA"
                    IconRight={Octicons}
                    iconRightName={showPassword?"eye-closed":"eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxButtom}>
                <Button text="ENTRAR" Loading={loading} onPress={()=>getLogin()}/>
                <Text style={style.TextFinal}>Não tem conta?</Text>
                <ButtonText text="Crie agora!" onPress={()=>getcriar()}/>
            </View>
                
            
        </View>
    )
    
}