import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    Button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },

    TextButton: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white'
    },

    Buttontext: {
        width: 90,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 40,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
    },

    TextButton2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'blue'
    },
})