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
        backgroundColor: "black",
    },

    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
    },

    boxFinal: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: "black"
    },

    logo: {
        width: 200,
        height: 200,
        marginTop: 60,
        borderColor: 'white',
        borderWidth: 3,
        borderRadius: 600,
    },

    title: {
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowRadius: 15,
        fontSize: 40,
        color: 'white',
        justifyContent: "center",
        alignItems: "center",
    },

    message: {
        fontWeight: 'bold',
        textShadowColor: 'white',
        textShadowRadius: 4,
        fontSize: 20,
        color: "white",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 0,
        marginTop: 15,
        paddingHorizontal: 15,
    },

    Button: {
        width: 250,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black',
        borderRadius: 40,
    },

    blackSquare: {
        width: 260,
        height: 70,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowRadius:40.00,
        elevation:9,
        shadowColor: 'black'        
      },

      blackSquareBig: {
        width: 355,
        height: 135,
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 79,
        borderWidth: 1.5,
        borderColor: 'white',
      },
})