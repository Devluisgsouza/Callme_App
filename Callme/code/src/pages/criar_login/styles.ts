import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "white"
    },

    boxMid: {
        height: Dimensions.get('window').height/1.5,
        width: '100%',
        paddingHorizontal: 30,
        backgroundColor: 'white',
    },


    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: -20,
        marginStart: 20
    },

    logo: {
        width: 70,
        height: 170,
        marginTop: -20,
        marginStart: -30,
    },

    logo2: {
        width: 200,
        height: 100,
        marginTop: -30,
    },

    TextCaixa: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    
    Botton: {
        marginTop: -100
    }
})