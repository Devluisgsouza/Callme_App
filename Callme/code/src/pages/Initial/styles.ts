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
        marginTop: 20,
        backgroundColor: 'black',
    },

    Title: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
        marginTop: 20,
    }
})