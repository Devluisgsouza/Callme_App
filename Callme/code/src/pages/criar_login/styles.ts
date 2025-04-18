import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

        
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
        marginTop: -30
    },


    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        marginTop: -40,
        marginStart: 20
    },

    logo: {
        width: 70,
        height: 170,
        marginTop: -40,
        marginStart: -30,
    },

    logo2: {
        width: 200,
        height: 100,
        marginTop: -40,
    },

    TextCaixa: {
        fontSize: 15,
        fontWeight: 'bold',

    },
    
    Botton: {
        marginTop:-120
    }
})