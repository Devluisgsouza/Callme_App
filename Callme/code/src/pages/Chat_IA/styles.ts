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
        height: Dimensions.get('window').height/1.149,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderEndEndRadius: 30,
        borderStartEndRadius: 30,
        borderColor: 'white',
        borderWidth: 3,
    },


    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: -40,
        marginStart: 120
    },


})