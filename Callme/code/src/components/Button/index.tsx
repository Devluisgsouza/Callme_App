import React from "react";
import { ActivityIndicator, TouchableHighlightProps, TouchableOpacity, Text, ImageComponent } from 'react-native';
import { style } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';


type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>>

type Props = TouchableHighlightProps & {
    text?:string,
    Loading?:boolean,
    icon?: IconComponent,
    iconName?: string,
    boderColor?:string,
    boderWidth?:number,
    boderRadius?:number,
    marginTop?:number,
}


export function Button({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Button}
            {...rest}
            activeOpacity={0.6}
        >
            {rest.Loading?<ActivityIndicator/>:<Text style={style.TextButton}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}


export function ButtonText({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Buttontext}
            {...rest}
            activeOpacity={0.2}
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
            activeOpacity={0.2}
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
            activeOpacity={0.2}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}


export function ButtonTextalterar({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Buttontextalterar}
            {...rest}
            activeOpacity={0.2}
        >
            {rest.Loading?<ActivityIndicator />:<Text style={style.TextButton2}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}

export function ButtonChat({...rest}:Props) {

    return(
        <TouchableOpacity 
            style={style.ButtonChat}
            {...rest}
            activeOpacity={0.2}
        >
            {<MaterialIcons style={style.Icon}>{rest.iconName}</MaterialIcons> }
        </TouchableOpacity>
    )
}


export function ButtonQuest({...rest}:Props) {

    return(
        <TouchableOpacity 
            style={style.ButtonQuest}
            {...rest}
            activeOpacity={0.2}
        >
            {<MaterialIcons style={style.Icon2}>{rest.iconName}</MaterialIcons> }
        </TouchableOpacity>
    )
}


export function ButtonBack({...rest}:Props) {

    return(
        <TouchableOpacity 
            style={style.ButtonBack}
            {...rest}
            activeOpacity={0.2}
        >
            {<MaterialIcons style={style.Icon3}>{rest.iconName}</MaterialIcons> }
        </TouchableOpacity>
    )
}

export function ButtonAtend({...rest}:Props) {

    return(
        <TouchableOpacity 
            style={style.ButtonAtend}
            {...rest}
            activeOpacity={0.2}
        >
            {<Text style={style.TextButton3}>{rest.text}</Text> }
        </TouchableOpacity>
    )
}

export function ButtonHistoric({...rest}:Props) {

    return(
        <TouchableOpacity 
            style={style.ButtonHistoric}
            {...rest}
            activeOpacity={0.2}
        >
            {<MaterialIcons style={style.Icon}>{rest.iconName}</MaterialIcons> }
        </TouchableOpacity>
    )
}

