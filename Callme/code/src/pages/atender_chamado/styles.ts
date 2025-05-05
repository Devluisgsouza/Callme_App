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
        flexDirection: 'row',
    },

    boxMid: {
        height: Dimensions.get('window').height/1.23,
        width: '100%',
        backgroundColor: "black",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
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

    message: {
        fontWeight: 'bold',
        fontSize: 13,
        color: "white",
        marginTop: 15,
        paddingHorizontal: 15,
    },

    message2: {
        fontWeight: 'bold',
        fontSize: 13,
        color: "white",
        marginTop: -15,
        paddingHorizontal: 15,
    },

    BoxWait: {
        width: 350,
        height: 90,
        backgroundColor: 'black',
        marginTop: 25,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'blue',
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

})