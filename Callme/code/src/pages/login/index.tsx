import React, {useState} from "react";
import { Text,View,Image,Alert } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logoCallmeapp.png';
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { Input } from "../../components/input";
import { Button, ButtonText, ButtonTextsenha } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { CheckBox } from "../../components/CheckBox";



let selectedUserType: string | null = null;

export function setSelectedUserType(type: string) {
    selectedUserType = type;
}

export function getSelectedUserType() {
    const type = selectedUserType;
    selectedUserType = null;
    return type;
}



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
                    if (isFuncionario){
                        setSelectedUserType('FUNCIONÁRIO');
                        Alert.alert('Login realizado com sucesso!');
                        navigation.reset({ routes: [{ name: "BottomRoutes" }] });}
                    else if (isTecnico){
                        setSelectedUserType('TÉCNICO');
                        Alert.alert('Login realizado com sucesso!');
                        navigation.reset({ routes: [{ name: "BottomTecnicoRoutes"}]});}
                    else{
                        setSelectedUserType('')
                        Alert.alert('ATENÇÃO', 'Preencha se você é (Técnico) ou (Funcionário)!');}
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
        return Alert.alert('ATENÇÃO','Impossível recuperar senha! Entre em contato com o suporte técnico para alterá-la.')
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
                <Text style={style.textfunc}>QUAL SUA FUNÇÃO</Text>
                <CheckBox value={userType} onChange={handleUserTypeChange} />
                <Input
                    value={email}
                    onChangeText={(text) => {
                        setEmail(text);
                        if (text) setEmailError(false);
                    }}
                    title={
                        <Text style={{ color: 'white' }}>
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
                        <Text style={{ color: 'white' }}>
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
                <View style={{marginTop: 21, marginStart: 30}}>
                    <Button text="ENTRAR" Loading={loading} onPress={() => getLogin()} />
                </View>
            </View>
            <View style={style.boxButtom}> 
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '50%' }}>
                    <Text style={style.TextFinal}>Não tem conta?</Text>
                    <ButtonText text="Crie agora!"  onPress={() => getcriar()} />
                </View>
            </View>
        </View>
    )
}