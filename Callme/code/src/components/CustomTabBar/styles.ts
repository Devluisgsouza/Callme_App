import {  StyleSheet } from "react-native";



export const style = StyleSheet.create({
    
    container: {
        backgroundColor: "black",
    },

    tabArea:{
        flexDirection: "row",
        backgroundColor: "black",
        height: 55,
        justifyContent: 'space-around',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderEndColor: 'white',
        borderStartColor: 'white',
        borderTopColor: 'white',
        borderWidth: 2,   
    },

    tabItem:{
        flex: 1,
        width:10,
        height: 50,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 2
    },

    textTab:{
        fontWeight: 'bold',
        marginTop:-2,
        color:'white'
    },
})