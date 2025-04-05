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
        justifyContent: 'center'
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
    },

    logo: {
        width: 200,
        height: 200
    },

    text: {
        fontWeight: 'bold',
        marginTop: -25,
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
        marginTop: 160,
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
    }
})