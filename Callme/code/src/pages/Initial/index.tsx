import React, {useState} from "react";
import { Text,View,Image } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo1.png';
import { Button, ButtonText } from "../../components/Button";








export default function Inicial() {

    return(
        <View style={style.container}>
            <View style={style.Box}>
                <Image
                    source={Logo}
                    style={{width: 200, height: 200}}
                    resizeMode="contain"   
                />
                <Text style={style.Title}>Ola</Text>
            </View> 
        </View>
    )

}
