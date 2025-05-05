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
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },


    boxMid: {
        height: Dimensions.get('window').height/1.23,
        width: '100%',
        backgroundColor: "black",   
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
        marginStart: 90
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
        width: 'auto',
        height: 'auto',
        fontWeight: 'bold',
        fontSize: 24,
        color: 'white',
        marginTop: 15,
        paddingStart: 20,
        paddingEnd: 20,
        backgroundColor: 'black',
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 30,
        alignSelf: 'center'
    },

    box1: {
        height: Dimensions.get('window').height/3,
        backgroundColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
    },

    box2: {
        height: Dimensions.get('window').height/3,
        backgroundColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 10,
    },

    box3: {
        height: Dimensions.get('window').height/3,
        backgroundColor: 'black',
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 10,
    },

    BoxWait: {
        width: 200,
        height: 90,
        backgroundColor: 'black',
        marginTop: 25,
        marginStart: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
      },

      BoxNow: {
        width: 200,
        height: 90,
        backgroundColor: 'black',
        marginTop: 25,
        marginStart: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'yellow',
      },

      BoxFinally: {
        width: 200,
        height: 90,
        backgroundColor: 'black',
        marginTop: 25,
        marginStart: 20,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'green',
      },

      message: {
        fontWeight: 'bold',
        fontSize: 13,
        color: "white",
        marginTop: 15,
        paddingHorizontal: 15,
    },
})
