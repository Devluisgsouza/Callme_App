import React from "react";
import { Text, View, ScrollView } from 'react-native';
import { style } from './styles';
import { ButtonAtend, ButtonHistoric } from "../../components/Button";
import {MaterialIcons} from '@expo/vector-icons';



export default function Atender_chamados(){


    async function atender() {
        
    }

    return(
        <View style={style.container}>
            <View style={style.boxTop}>
                <Text style={style.Textinicial}>ATENDER CHAMADOS</Text>
            </View>
            <ScrollView style={style.boxMid}>
                <Text style={style.TextMid}>INICIAR ATENDIMENTO</Text>
                    <View style={style.BoxWait}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style.message}>
                                CHAMADO #06
                            </Text>
                            <ButtonAtend
                            text="ATENDER"
                            iconName="chat" 
                            onPress={() => atender()}
                            />
                        </View>
                        <Text style={style.message2}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style.message}>
                                CHAMADO #07
                            </Text>
                            <ButtonAtend
                            text="ATENDER"
                            iconName="chat" 
                            onPress={() => atender()}
                            />
                        </View>
                        <Text style={style.message2}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style.message}>
                                CHAMADO #08
                            </Text>
                            <ButtonAtend
                            text="ATENDER"
                            iconName="chat" 
                            onPress={() => atender()}
                            />
                        </View>
                        <Text style={style.message2}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
                    <View style={style.BoxWait}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={style.message}>
                                CHAMADO #09
                            </Text>
                            <ButtonAtend
                            text="ATENDER"
                            iconName="chat" 
                            onPress={() => atender()}
                            />
                        </View>
                        <Text style={style.message2}>
                            STATUS: AGUARDANDO
                        </Text>
                    </View>
            </ScrollView>
      </View>
    )
}
