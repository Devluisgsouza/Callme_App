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
        backgroundColor: "white"
    },

    boxMid: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "white",

    },

    boxFinal: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        backgroundColor: "white"
    },

    logo: {
        width: 400,
        height: 250,
        marginTop: 50
    },

    title: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'white',
        justifyContent: "center",
        alignItems: "center"
    },

    message: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "black",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 5,
        marginTop: 15,
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
        width: 240,
        height: 70,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderRadius: 30,
      },

      blackSquareBig: {
        width: 370,
        height: 135,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 30,
        borderWidth: 5,
        borderColor: 'black',
      },
})