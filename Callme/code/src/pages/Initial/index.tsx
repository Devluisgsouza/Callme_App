import React, {useState} from "react";
import { Text,View,Image } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logoCallmeapp.png';
import { Button, ButtonText } from "../../components/Button";








export default function Inicial() {

    return(
        <View style={style.container}>
            <View style={style.Box}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"   
                    
                />
                <Text style={style.Title}>Ola</Text>
            </View> 
        </View>
    )

}
