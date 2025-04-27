import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,    
    },
    
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "black"
    },

    boxMid: {
        height: Dimensions.get('window').height/1.41,
        width: '100%',
        paddingHorizontal: 30,
        backgroundColor: 'black',
        marginTop: -30
    },


    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },

    logo2: {
        width: 100,
        height: 100,
        marginTop: 20,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 300,
    },

    TextCaixa: {
        fontSize: 15,
        fontWeight: 'bold',
        color: 'white',

    },
    
    Botton: {
        marginTop: -75,
        alignSelf: 'center'
    }
})