import React, { forwardRef,Fragment, LegacyRef, useState } from "react";
import {View, TextInput, TextInputProps, TouchableOpacity} from "react-native";
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
    onIconRightPress?: () => void,
    onChangeText?: (text: string) => void,
    onPress?: () => void,
}


export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, iconLeftName, iconRightName, onIconRightPress, ...rest } = Props;

    const [iconOpacity, setIconOpacity] = useState(1); // estado de opacidade

    const handlePressIn = () => setIconOpacity(0.3);
    const handlePressOut = () => setIconOpacity(1);

    const calculateSizeWeidth = () => {
        if (IconLeft && IconRight) {
            return '80%';
        } else if (IconLeft || IconRight) {
            return '90%';
        } else {
            return '100%';
        }
    };

    const CalculateSizePaddingLef = () => {
        if (IconLeft && IconRight) {
            return 10;
        } else if (IconLeft || IconRight) {
            return 10;
        } else {
            return 20;
        }
    };

    

    return (
        <Fragment>
            <View style={[style.BoxInput, { paddingLeft: CalculateSizePaddingLef() }]}>
                <TextInput
                    ref={ref}
                    multiline
                    style={[style.input, { width: calculateSizeWeidth() }]}
                    {...rest}
                />
                {IconRight && iconRightName && (
                    <TouchableOpacity
                        style={{ width: '10%' }}
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={onIconRightPress}
                    >
                        <IconRight
                            name={iconRightName as any}
                            size={25}
                            color={'white'}
                            style={[style.Icon, { opacity: iconOpacity }]}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    );
});
