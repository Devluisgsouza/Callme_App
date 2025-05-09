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
        height: Dimensions.get('window').height/1.13,
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

    TitleList: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 80,
        color: 'white',
    },

    TextInfo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: "center",
    },

    BoxInfo: {
        height: '15%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'white',
        borderWidth: 1.5,
        borderRadius: 10,
        marginTop: 40,
        

    }
})