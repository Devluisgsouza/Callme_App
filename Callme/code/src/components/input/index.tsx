import React, { forwardRef,Fragment, LegacyRef, ReactElement } from "react";
import {View, Text, TextInput, TextInputProps, TouchableOpacity} from "react-native";
import {style} from "./styles";
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';


type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                        React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    title?: ReactElement,
    onIconLeftPress?: () => void,
    onIconRightPress?: () => void,
}


export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    
    const {IconLeft, IconRight, iconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, ...rest } = Props
    

const calculateSizeWeidth = () => {
    if(IconLeft && IconRight){
        return '80%'
    }else if(IconLeft || IconRight){
        return '90%'
    }else{
        return '100%'
    }   
}

const CalculateSizePaddingLef = () => {
    if(IconLeft && IconRight){
        return 10;
    }else if(IconLeft || IconRight){
        return 10;
    }else{
        return 20;
    }
};
    
    
    return (
        <Fragment>
            {title&&<Text style={style.titleInput}>{title}</Text>}
            <View style={[style.BoxInput,{paddingLeft: CalculateSizePaddingLef()}]}>
                {IconLeft && iconLeftName &&(
                <TouchableOpacity onPress={onIconLeftPress} style={style.button}>
                    <IconLeft name={iconLeftName as any} size={20} color={'gray'} style={style.Icon}/>
                </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input,{width: calculateSizeWeidth()}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName &&(
                <TouchableOpacity onPress={onIconRightPress} style={style.button}>
                    <IconRight name={iconRightName as any} size={20} color={'gray'} style={style.Icon}/>
                </TouchableOpacity>
                )}

            </View>
        </Fragment>
    )
})