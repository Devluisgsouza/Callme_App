import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
        
    },
    
    boxTop: {
        height: Dimensions.get('window').height/9,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
        justifyContent: 'center',
    },

    boxMid: {
        height: Dimensions.get('window').height/1.23,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 40,
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10


    },

    logo: {
        width: 70,
        height: 170,
        marginTop: -30


    },
})