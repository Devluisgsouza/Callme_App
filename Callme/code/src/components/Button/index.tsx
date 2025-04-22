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


export function ButtonTextalterar({...rest}:Props) {
    return(
        <TouchableOpacity 
            style={style.Buttontextalterar}
            {...rest}
            activeOpacity={0.6}
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
            activeOpacity={0.6}
        >
            {<MaterialIcons style={style.Icon}>{rest.iconName}</MaterialIcons> }
        </TouchableOpacity>
    )
}




