import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        paddingHorizontal: 40,


    },

    boxButtom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        marginTop: 10

    },

    logo: {
        width: 170,
        height: 170,
        marginTop: 20
    },

    text: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 30,
        color: 'black'
    },

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

    TextFinal: {
        marginTop: 90,
        fontSize: 15,
        fontWeight: 'bold',
        color: 'gray'
    },

    ButtonText: {
        height: 0,
        width: 250,
        alignItems: "center",
        fontSize: 10,
        backgroundColor: "white"
    },

    textError: {
        fontWeight: 'bold',
        marginTop: 30,
        fontSize: 50,
        color: 'black'
    },

    textfunc: {
        fontSize: 20,
        fontWeight: '500',
        marginTop: 20,
        textAlign: 'center',
    }
})