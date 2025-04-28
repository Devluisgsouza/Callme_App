import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',      
    },
    
    boxTop: {
        height: Dimensions.get('window').height/8,
        width: '100%',
        backgroundColor: "black",
   
    },

    boxMid: {
        height: Dimensions.get('window').height/1.25,
        width: '100%',
        paddingEnd: 10,
        paddingStart: 10,
        backgroundColor: "black",
        borderRadius: 30,
        borderColor: 'white',
        borderWidth: 3,
        paddingBottom: 20,    
    },

    boxChat: {
        height: Dimensions.get('window').height/14,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
    },


    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -40,
        marginStart: 130
    },

    ChatBox: {
        backgroundColor: 'white',
        height: 'auto',
        width: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        marginTop: 30,
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        maxWidth: '80%',
        marginEnd: 10,
    },

    logo:{
        width: 25,
        height: 25,
        borderRadius: 50,
        borderColor: 'white',
        borderWidth: 1.5,
        alignSelf: 'flex-end',
    },
        
    IABox: {
        backgroundColor: 'gray',
        height: 'auto',
        width: 'auto',
        paddingLeft: 10,
        paddingRight: 10,
        padding: 5,
        marginTop: 30,
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 10,
        maxWidth: '80%',
        marginStart: 10,
    },

})