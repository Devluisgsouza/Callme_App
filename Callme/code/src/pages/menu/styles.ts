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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "green"
    },

    logo: {
        width: 400,
        height: 250,
        marginTop: 30
    },

    title: {
        fontWeight: 'bold',
        marginTop: 0,
        fontSize: 40,
        color: 'white',
        justifyContent: "center",
        alignItems: "center"
    },

    message: {
        fontWeight: 'bold',
        fontSize: 20,
        color: "white",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 5,
        marginTop: 10,
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
        width: 350,
        height: 70,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 30,
      },

      blackSquareBig: {
        width: 350,
        height: 160,
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 10,
        borderRadius: 30,
      },
})