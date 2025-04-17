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
    },

    boxMid: {
        height: Dimensions.get('window').height/1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 40,
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
    
    boxInfo: {
        marginTop: -10,
        backgroundColor: 'lightgray',
        borderRadius: 30,
        width: 320,
        height: 40,
        justifyContent: 'center',
    },

    infoText: {
        fontSize: 15,
        marginLeft:10
    },   
    
    infoContainer: {
        marginTop: -10,
        marginVertical: 35,
    },

    infoTitle: {
        fontSize: 15,
        marginBottom: 15,
        marginLeft: 5,
        fontWeight: '600'
    },
})