import React from "react";
import { Text, View, ScrollView } from 'react-native';
import { style } from './styles';
import { ButtonChat, ButtonHistoric } from '../../components/Button';
import {MaterialIcons} from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';



export default function Visualizar_chamados(){


    const navigation = useNavigation<NavigationProp<any>>();



    async function download(){
        navigation.navigate("download_chamados")
    }

    async function getChat(){
        navigation.navigate("Chat_IA")
    }


    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>CHAMADOS</Text>
                <ButtonHistoric
                icon={MaterialIcons} 
                iconName="download" 
                onPress={() => download()}
                />  
            </View>
            <View style={style.boxChat}>
                <View style={{ flexDirection: 'row'}}>
                    <Text style={style.TextChat}>FALE COM A IA DA CALLME</Text>
                    <ButtonChat 
                    icon={MaterialIcons} 
                    iconName="chat" 
                    onPress={() => getChat()}/>
                </View>
            </View>

            <View style={style.boxMid}>
                <ScrollView 
                style={style.box1}
                contentContainerStyle={{ paddingBottom: 35 }}>
                    <Text style={style.TextMid}>EM ESPERA</Text>
                    <View style={style.BoxWait}>
                        <Text style={style.message}>
                            CHAMADO #08
                        </Text>
                        <Text style={style.message}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <Text style={style.message}>
                            CHAMADO #09
                        </Text>
                        <Text style={style.message}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <Text style={style.message}>
                            CHAMADO #10
                        </Text>
                        <Text style={style.message}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <Text style={style.message}>
                            CHAMADO #11
                        </Text>
                        <Text style={style.message}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                </ScrollView>
                <ScrollView 
                style={style.box2}
                contentContainerStyle={{ paddingBottom: 35 }}>
                    <Text style={style.TextMid}>EM ANDAMENTO</Text>
                    <View style={style.BoxNow}>
                        <Text style={style.message}>
                            CHAMADO #05
                        </Text>
                        <Text style={style.message}>
                            STATUS: INICIALIZADO
                        </Text>
                    </View>
                    <View style={style.BoxNow}>
                        <Text style={style.message}>
                            CHAMADO #06
                        </Text>
                        <Text style={style.message}>
                            STATUS: INICIALIZADO
                        </Text>
                    </View>
                    <View style={style.BoxNow}>
                        <Text style={style.message}>
                            CHAMADO #07
                        </Text>
                        <Text style={style.message}>
                            STATUS: INICIALIZADO
                        </Text>
                    </View>
                </ScrollView>
                <ScrollView 
                style={style.box3}
                contentContainerStyle={{ paddingBottom: 35 }}>
                    <Text style={style.TextMid}>FINALIZADOS</Text>
                    <View style={style.BoxFinally}>
                        <Text style={style.message}>
                            CHAMADO #01
                        </Text>
                        <Text style={style.message}>
                            STATUS: FINALIZADO
                        </Text>
                    </View>
                    <View style={style.BoxFinally}>
                        <Text style={style.message}>
                            CHAMADO #02
                        </Text>
                        <Text style={style.message}>
                            STATUS: FINALIZADO
                        </Text>
                    </View>
                    <View style={style.BoxFinally}>
                        <Text style={style.message}>
                            CHAMADO #03
                        </Text>
                        <Text style={style.message}>
                            STATUS: FINALIZADO
                        </Text>
                    </View>
                    <View style={style.BoxFinally}>
                        <Text style={style.message}>
                            CHAMADO #04
                        </Text>
                        <Text style={style.message}>
                            STATUS: FINALIZADO
                        </Text>
                    </View>
                </ScrollView>
            </View>

      </View>

    )
}
