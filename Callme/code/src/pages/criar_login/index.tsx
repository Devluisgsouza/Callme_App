import React, {useState} from "react";
import { Text, View, Image, Alert } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo1.png';
import Logo2 from '../../assets/Perfil.png';
import { Input } from "../../components/input";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import {MaterialIcons, Octicons} from '@expo/vector-icons';
import { Button} from "../../components/Button";
import { CheckBox } from "../../components/CheckBox";



let selectedUserType2: string | null = null;

export function setSelectedUserType2(type: string) {
    selectedUserType2 = type;
}

export function getSelectedUserType2() {
    return selectedUserType2;
}


export default function Criar_Login(){
    
    const navigation = useNavigation<NavigationProp<any>>();
    const [nome,setNome] = useState('')
    const [re,setRe] = useState('')
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [showPassword,setShowPassword] = useState(true);
    const [loading,setLoading] = useState(false);
    const [nomeError, setNomeError] = useState(false);
    const [reError, setReError] = useState(false);
    const [userType, setUserType] = useState<'tecnico' | 'funcionario' | null>(null);
    const [isFuncionario, setIsFuncionario] = useState(false);
    const [isTecnico, setIsTecnico] = useState(false);
    const handleUserTypeChange = (type: 'tecnico' | 'funcionario') => {
        setUserType(type);
        setIsFuncionario(type === 'funcionario');
        setIsTecnico(type === 'tecnico');
    }


    async function getCriarLogin() {
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
                if (nome === '') {
                    setNomeError(true);
                    hasError = true;
                } else {
                    setNomeError(false);
                }
                if (re === '') {
                    setReError(true);
                    hasError = true;
                } else {
                    setReError(false);
                }
        
                if (hasError) {
                    return Alert.alert('ATENÇÃO', 'Preencha os campos obrigatórios marcados com ( * )!');
                }
        
                setLoading(true);
        
                setTimeout(() => {
                    setLoading(false);
                    if (isFuncionario){
                            setSelectedUserType2('FUNCIONÁRIO');
                            Alert.alert('Login realizado com sucesso!');
                            navigation.reset({ routes: [{ name: "BottomRoutes" }] });}
                        else if (isTecnico){
                            setSelectedUserType2('TÉCNICO');
                            Alert.alert('Login realizado com sucesso!');
                            navigation.reset({ routes: [{ name: "BottomTecnicoRoutes"}]});}
                        else{
                            Alert.alert('ATENÇÃO', 'Preencha se você é (Técnico) ou (Funcionário)!');
                        }
                    }, 1000);
                
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image
                        source={Logo}
                        style={style.logo}
                        resizeMode="contain"
                        />
                    <Text style={style.Textinicial}>CRIE SUA CONTA</Text>
                    </View>
                <View>
                <Image
                        source={Logo2}
                        style={style.logo2}
                        resizeMode="contain"
                        />
                </View>
            </View>

            <View style={style.boxMid}>
                <CheckBox value={userType} onChange={handleUserTypeChange} />
                <Input
                value={nome}
                onChangeText={(text) => {
                    setNome(text);
                    if (text) setNomeError(false);
                }}
                title={
                    <Text style={style.TextCaixa}>
                        NOME COMPLETO
                        {nomeError && <Text style={{ color: 'red' }}> *</Text>}
                    </Text>
                    }
                />
                <Input
                value={re}
                onChangeText={(text) => {
                    setRe(text);
                    if (text) setReError(false);
                }}
                title={
                    <Text style={style.TextCaixa}>
                        R.E. (REGISTRO EMPRESARIAL)
                        {reError && <Text style={{ color: 'red' }}> *</Text>}
                    </Text>
                    }
                />
                <Input
                value={email}
                onChangeText={(text) => {
                    setEmail(text);
                    if (text) setEmailError(false);
                }}  
                title={
                    <Text style={style.TextCaixa}>
                        EMAIL
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
                        <Text style={style.TextCaixa}>
                            SENHA
                            {passwordError && <Text style={{ color: 'red' }}> *</Text>}
                        </Text>
                    }
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.Botton}>
                <Button text="CRIAR CONTA" Loading={loading} onPress={() => getCriarLogin()} />
            </View>
      </View>  
    )
}

