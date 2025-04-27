import { Dimensions, StyleSheet } from "react-native";



export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',      
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
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 30,
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },

    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        marginTop: 70,
        color: 'white',
      },

    TitleBox: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },

    TitleList: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 40,
        color: 'white',
    }
})