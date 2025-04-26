import React, { useState } from 'react';
import { View, Text } from 'react-native';import { style } from './styles';
import { Input } from '../../components/inputChat';
import { ButtonBack } from '../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

export default function Chat_IA (){


    const navigation = useNavigation<NavigationProp<any>>();
    const [message,setMessage] = useState('');

    async function getChamados(){
        navigation.navigate("chamados")
    }


return(
        <View style={style.container}>
            <View style={style.boxTop}>
                    <ButtonBack 
                        icon={MaterialIcons} 
                        iconName="arrow_back" 
                        onPress={() => getChamados()}/>
                    <Text style={style.Textinicial}>CHAT IA</Text>  
            </View>

            <View style={style.boxMid}>
                <Input
                    value={message}
                    onChangeText={(text) => {
                        setMessage(text);}}
                    IconRight={MaterialIcons}
                    iconRightName="send"
                />
            </View>

      </View>
)
}