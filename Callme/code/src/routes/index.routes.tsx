import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login";
import Criar_Login from "../pages/criar_login";
import BottomRoutes from "./botton.routes";
import Criar_chamado from "../pages/Criar_chamado";
import Perfil from "../pages/perfil";
import Visualizar_chamados from "../pages/chamados";
import BottomTecnicoRoutes from "./botton.tecnico.routes";
import Visualizar_chamados_tecnico from "../pages/cahamados_tecnico";
import Atender_chamados from "../pages/atender_chamado";
import Chat_IA from "../pages/Chat_IA";




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
                name="Criar_chamado"
                component={Criar_chamado}
            />
            <Stack.Screen
                name="BottomRoutes"
                component={BottomRoutes}
            />
            <Stack.Screen
                name="BottomTecnicoRoutes"
                component={BottomTecnicoRoutes}
            />
            <Stack.Screen
                name="criar_login"
                component={Criar_Login}
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
                name="chamados_tecnico"
                component={Visualizar_chamados_tecnico}
            />
            <Stack.Screen
                name="atender_chamado"
                component={Atender_chamados}
            />
            <Stack.Screen
                name="Chat_IA"
                component={Chat_IA}
            />                   
        </Stack.Navigator>
    )
}