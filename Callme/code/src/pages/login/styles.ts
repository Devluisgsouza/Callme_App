import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },
    
    boxTop: {
        height: Dimensions.get('window').height/2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },

    boxMid: {
        height: Dimensions.get('window').height/2,
        width: '100%',
        paddingHorizontal: 40,
        backgroundColor: 'black',


    },

    boxButtom: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        alignItems: 'center',
        backgroundColor: 'black',
    },

    logo: {
        width: 170,
        height: 170,
        marginTop: 100,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 100,
    },

    text: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 30,
        color: 'white'
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
        marginTop: 60,
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
        color: 'white'
    }
})