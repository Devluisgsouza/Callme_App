import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red"
    },

    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "blue"
    },

    boxFinal: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green"
    },
})