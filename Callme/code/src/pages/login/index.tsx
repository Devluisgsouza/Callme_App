import React, {useState} from "react";
import { Text,View,Image,Alert } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo1.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { Input } from "../../components/input";
import { Button, ButtonText, ButtonTextsenha } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CheckBox } from "../../components/CheckBox";




export default function Login (){

    const navigation = useNavigation<NavigationProp<any>>();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [userType, setUserType] = useState<'tecnico' | 'funcionario' | null>(null);
    const [isFuncionario, setIsFuncionario] = useState(false);
    const [isTecnico, setIsTecnico] = useState(false);
    const handleUserTypeChange = (type: 'tecnico' | 'funcionario') => {
        setUserType(type);
        setIsFuncionario(type === 'funcionario');
        setIsTecnico(type === 'tecnico');
    };




    async function getLogin() {
        try {
            let hasError = false;
    
            if (email === '') {
                setEmailError(true);
                hasError = true;
            } else {
                setEmailError(false);
            }
    
            if (password === '') {
                setPasswordError(true);
                hasError = true;
            } else {
                setPasswordError(false);
            }
    
            if (hasError) {
                return Alert.alert('ATENÇÃO', 'Preencha os campos obrigatórios marcados com ( * )!');
            }
    
            setLoading(true);
    
            setTimeout(() => {
                setLoading(false);
                if (email == 'a' && password == 'a') {
                    Alert.alert('Login realizado com sucesso!');
                    if (isFuncionario){
                        navigation.reset({ routes: [{ name: "BottomRoutes" }] });}
                    else if (isTecnico){
                        navigation.reset({ routes: [{ name: "BottomTecnicoRoutes"}]});}
                } else {
                    Alert.alert('ATENÇÃO', 'Usuário ou senha inválidos!');
                }
            }, 1000);
            
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }
    


    async function getcriar(){
        navigation.navigate("criar_login")
    }

    async function getsenha() {
        return Alert.alert('ATENÇÃO','Impossível recuperar senha! entre em contato com o suporte técnico para alterá-la.')
    }


    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image 
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"     
                />
                <Text style={style.text}>Faça seu Login</Text>
                
            </View>
            <View style={style.boxMid}>
                <CheckBox value={userType} onChange={handleUserTypeChange} />
                <Input
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        if (text) setEmailError(false);
                    }}
                    title={
                        <Text>
                            ENDEREÇO DE EMAIL
                            {emailError && <Text style={{ color: 'red' }}> *</Text>}
                        </Text>
                    }
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text);
                        if (text) setPasswordError(false);
                    }}
                    title={
                        <Text>
                            SENHA
                            {passwordError && <Text style={{ color: 'red' }}> *</Text>}
                        </Text>
                    }
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
                <ButtonTextsenha text="Esqueci minha senha" onPress={()=> getsenha()} />
            </View>
            <View style={style.boxButtom}>
                <Button text="ENTRAR" Loading={loading} onPress={() => getLogin()} />
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={style.TextFinal}>Não tem conta?</Text>
                    <ButtonText text=" Crie agora!" onPress={() => getcriar()} />
                </View>
            </View>
        </View>
    )
}