import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,

    },
    
    Box: {
        height: Dimensions.get('window').height/1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
    },

    Title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
    },

    logo: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        marginTop: -20,
        borderRadius: 400,
    },

    SubTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30,
    },
})