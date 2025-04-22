import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',      
    },
    
    boxTop: {
        height: Dimensions.get('window').height/9,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
        justifyContent: 'center',
    },

    boxMid: {
        height: Dimensions.get('window').height/1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },

})