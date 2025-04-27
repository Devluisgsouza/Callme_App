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
        width: 250,
        height: 250,
        marginTop: -20,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 300,
    },

    SubTitle: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 30,
    },
})