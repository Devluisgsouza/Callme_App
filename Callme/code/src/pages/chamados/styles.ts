import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
        
    },
    
    boxTop: {
        height: Dimensions.get('window').height/9,
        width: '100%',
        backgroundColor: "black",
    },

    boxChat: {
        height: Dimensions.get('window').height/12,
        width: '100%',
        backgroundColor: "black",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderEndEndRadius: 30,
        borderStartEndRadius: 30,
        borderColor: 'white',
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    boxMid: {
        height: Dimensions.get('window').height/1,
        width: '100%',
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 10,
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginStart: 120,
        marginTop: -40,
    },

    logo: {
        width: 70,
        height: 170,
        marginTop: -30

    },

    TextChat: {
        width: '100%',
        height: 100,
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white',
        marginStart: 20,
        marginTop: 13,
        
    },
})