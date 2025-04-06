import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login";
import Menu from "../pages/menu";
import Criar_Login from "../pages/criar_login";
import BottomRoutes from "./botton.routes";
import Criar_chamado from "../pages/criar_chamado";
import Perfil from "../pages/perfil";
import Visualizar_chamados from "../pages/chamados";
import Recuperar_senha from "../pages/recuperar_senha";



export default function Routes(){
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown:false,
                cardStyle:{
                    backgroundColor:"white"
                }
            }}
        >

            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
            <Stack.Screen
                name="criar_login"
                component={Criar_Login}
            />
            <Stack.Screen
                name="criar_chamado"
                component={Criar_chamado}
            />
            <Stack.Screen
                name="perfil"
                component={Perfil}
            />
            <Stack.Screen
                name="chamados"
                component={Visualizar_chamados}
            />            
            <Stack.Screen
                name="recuperar_senha"
                component={Recuperar_senha}
            />    

        </Stack.Navigator>
    )
}