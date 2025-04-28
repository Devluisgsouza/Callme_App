import { StyleSheet } from "react-native";


export const style = StyleSheet.create({

    BoxInput: {
        width: 300,
        height: 120,
        borderWidth: 3,
        borderRadius: 10,
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        borderColor: 'gray',
        justifyContent: 'space-between',
    },

    input: {
        height: '100%',
        width: '90%',
        borderRadius: 40,
        justifyContent: 'space-between',
        textAlignVertical: "top",
        
    },

    titleInput: {
        fontSize: 15,
        marginTop: 30,
    },

    Icon:{
        width: '100%'
    },

    button:{
        width: '10%'
    },

});