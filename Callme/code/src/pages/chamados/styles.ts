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
        alignItems: 'center',
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
        marginTop: 30,
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
        fontSize: 22,
        color: 'white',
        marginStart: 20,
        marginTop: 15,
        
    },

    TextMid: {
        width: '100%',
        height: 100,
        fontWeight: 'bold',
        fontSize: 24,
        color: 'black',
        marginStart: 20,
        marginTop: 15,
    }
})