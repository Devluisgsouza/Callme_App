import React, { forwardRef,Fragment, LegacyRef, ReactElement } from "react";
import {View, Text, TextInput, TextInputProps, TouchableOpacity} from "react-native";
import {style} from "./styles";
import {FontAwesome, MaterialIcons, Octicons} from '@expo/vector-icons';

async function getMessage() {}


type IconComponent =    React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                        React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                        React.ComponentType<React.ComponentProps<typeof Octicons>>;


type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    iconLeftName?: string,
    iconRightName?: string,
    onIconRightPress?: () => void,
    onChangeText?: (text: string) => void,
    opacity?: number,
    onPress?: () => void,

}


export const Input = forwardRef((Props:Props, ref: LegacyRef<TextInput> | null)=>{
    
    const {IconLeft, IconRight, iconLeftName, iconRightName, onIconRightPress, ...rest } = Props
    

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
            <View style={[style.BoxInput,{paddingLeft: CalculateSizePaddingLef()}]}>
                <TextInput
                    style={[
                        style.input,{width: calculateSizeWeidth()}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName &&(
                <TouchableOpacity onPress={onIconRightPress} activeOpacity={0.2} style={style.button}>
                    <IconRight name={iconRightName as any} size={20} color={'white'} style={style.Icon} onPress={onIconRightPress} />
                </TouchableOpacity>
                )}

            </View>
        </Fragment>
    )
})