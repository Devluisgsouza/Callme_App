import React from "react";
import { TouchableOpacity, Text, View } from 'react-native';
import { style } from "./styles";
import { MaterialIcons} from '@expo/vector-icons'


import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export default ({ state, navigation }: BottomTabBarProps) => {

    const go = (screenName:string)=>{
        navigation.navigate(screenName)
    }


    return(
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem} onPress={()=>go('Menu_tecnico')}>
                <MaterialIcons
                    name="home"
                    style={{opacity:state.index === 0?1:0.3,fontSize:32,color:'white'}}
                />
                <Text style={style.textTab}>
                    Menu</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.tabItem} onPress={()=>go('Chamados_tecnico')}>
                <MaterialIcons
                    name="storage"
                    style={{opacity:state.index === 1?1:0.3,fontSize:32,color:'white'}}
                />
                <Text style={style.textTab}>
                    Chamados</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.tabItem} onPress={()=>go('Atender_chamado')}>
                <MaterialIcons
                    name="add-box"
                    style={{opacity:state.index === 2?1:0.3,fontSize:32,color:'white'}}
                />
                <Text style={style.textTab}>
                    Atender</Text>
            </TouchableOpacity>


            <TouchableOpacity style={style.tabItem} onPress={()=>go('Perfil')}>
                <MaterialIcons
                    name="person"
                    style={{opacity:state.index === 3?1:0.3,fontSize:32,color:'white'}}
                />
                <Text style={style.textTab}>
                    Perfil</Text>
            </TouchableOpacity>

        </View>
    )
}
