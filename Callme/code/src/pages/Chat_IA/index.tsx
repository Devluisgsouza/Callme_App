import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { style } from './styles';
import { Input } from '../../components/inputChat';
import { ButtonBack } from '../../components/Button';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import Logo from '../../assets/Conta.png';
import Logo2 from '../../assets/logoCallmeapp.png';

export default function Chat_IA() {
  const navigation = useNavigation<NavigationProp<any>>();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]); // mensagens enviadas
  const scrollViewRef = useRef<ScrollView>(null);

  // Função para voltar
  async function getChamados() {
    navigation.reset({ routes: [{ name: "BottomRoutes" }] });
  }

  // Envia a mensagem atual
  const handleSend = () => {
    if (message.trim() === '') return; // evita enviar vazio
    setMessages(prev => [...prev, message]); // adiciona mensagem
    setMessage(''); // limpa input
    setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 100);
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <ButtonBack
          icon={MaterialIcons}
          iconName="arrow_back"
          onPress={() => getChamados()}
        />
        <Text style={style.Textinicial}>CHAT IA</Text>
      </View>

      <ScrollView 
      style={style.boxMid}
      ref={scrollViewRef}
      contentContainerStyle={{ paddingBottom: 35 }}>
        <Text style={{ 
            color: 'white', 
            fontSize: 15, 
            marginTop: 20, 
            fontWeight: 'bold', 
            marginStart: '9%' }}>
            Olá, sou a IA da CallMe. Como posso ajudar?
        </Text>

        {messages.map((msg, index) => (
            <ScrollView key={index}>
                <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
                    <View style={style.ChatBox}>
                        <Text style={{ 
                            color: 'black',
                            fontSize: 15, 
                            fontWeight: 'bold' }}>
                            {msg}
                        </Text>
                    </View>
                    <Image
                        source={Logo}
                        style={style.logo}
                        resizeMode="contain"     
                        />
                </View>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
                    <Image
                        source={Logo2}
                        style={style.logo}
                        resizeMode="contain"     
                        />
                    <View style={style.IABox}>
                        <Text style={{ 
                            color: 'black',
                            fontSize: 15, 
                            fontWeight: 'bold' }}>
                            Ola, sou a IA da Callme, no memonto não posso te ajudar, pois estou em desenvolvimento!
                        </Text>
                    </View>
                </View>
            </ScrollView>
        ))}
      </ScrollView>

      <View style={style.boxChat}>
        <Input
          value={message}
          placeholder="Digite sua mensagem"
          placeholderTextColor="white"
          onChangeText={(text) => setMessage(text)}
          IconRight={MaterialIcons}
          iconRightName="send"
          onIconRightPress={handleSend} // <- importante!
        />
      </View>
    </View>
  );
}
