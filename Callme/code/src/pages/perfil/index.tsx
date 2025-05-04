import React, { useEffect, useState } from "react";
import { Text, View, Image, Alert } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/Conta.png';
import { ButtonTextalterar } from "../../components/Button";
import { getSelectedUserType } from "../login";
import { getSelectedUserType2 } from "../criar_login";




export default function Perfil(){

    const [userType, setUserType] = useState<string | null>(null);
    const [userType2, setUserType2] = useState<string | null>(null);

    

    useEffect(() => {
        const type = getSelectedUserType();
        setUserType(type);
    }, []);

    useEffect(() => {
        const type = getSelectedUserType2();
        setUserType2(type);
    }, []);



    async function getalterar() {
        return Alert.alert('ATENÇÃO','Impossível alterar seus dados! Entre em contato com o suporte técnico para alterá-los.');
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>PERFIL</Text>  
            </View>

            <View style={style.boxMid}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <View style={{marginTop: 50}}>
                    <View style={style.infoContainer}>
                        <Text style={style.infoTitle}>NOME</Text>
                        <View style={style.boxInfo}>
                            <Text style={style.infoText}>LUIS GUILHERME DE SOUZA</Text>
                        </View>
                    </View>

                    <View style={style.infoContainer}>
                        <Text style={style.infoTitle}>RE (REGISTRO EMPRESARIAL)</Text>
                        <View style={style.boxInfo}>
                            <Text style={style.infoText}>G01DJI5</Text>
                        </View>
                    </View>

                    <View style={style.infoContainer}>
                        <Text style={style.infoTitle}>EMAIL</Text>
                        <View style={style.boxInfo}>
                            <Text style={style.infoText}>devlgsouza@gmail.com</Text>
                        </View>
                    </View>

                    <View style={style.infoContainer}>
                        <Text style={style.infoTitle}>FUNÇÃO</Text>
                        <View style={style.boxInfo}>
                            <Text style={style.infoText}>
                                {userType || userType2 || 'NÃO DEFINIDO'}
                            </Text>
                        </View>
                    </View>
                </View>
                <ButtonTextalterar text="Alterar dados da conta" onPress={() => getalterar()} />
            </View>
        </View>
    );
}
