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
        height: Dimensions.get('window').height/1,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    Textinicial: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 10,
    },

    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 8,
      },
      
      input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 10,
        height: 40,
        backgroundColor: '#fff',
      },
      
      botaoEnviar: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 10,
        marginLeft: 8,
      },
      
      textoBotao: {
        color: 'white',
        fontWeight: 'bold',
      },
      

})