import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text } from 'react-native';
import { style } from "./styles";

type Props = TouchableHighlightProps & {
    text:string,
    Loading?:boolean,
}


export function Button({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Button}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}


export function ButtonText({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Buttontext}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton2}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}

export function ButtonTextsenha({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Buttontextsenha}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton2}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}

export function ButtonMenu({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.ButtonMenu}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}



