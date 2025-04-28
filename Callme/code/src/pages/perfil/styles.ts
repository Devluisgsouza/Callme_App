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
        height: Dimensions.get('window').height/1.23,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "black",
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
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
        height: 70,
        marginTop: 40,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    
    boxInfo: {
        marginTop: -10,
        backgroundColor: 'white',
        borderRadius: 30,
        borderWidth: 3,
        borderColor: 'gray',
        width: 320,
        height: 40,
        justifyContent: 'center',
    },

    infoText: {
        fontSize: 15,
        marginLeft:10,
        fontWeight: 'bold'
    },   
    
    infoContainer: {
        marginTop: -10,
        marginVertical: 35,
    },

    infoTitle: {
        fontSize: 15,
        marginBottom: 15,
        marginLeft: 5,
        fontWeight: '600',
        color: 'white',
    },
})