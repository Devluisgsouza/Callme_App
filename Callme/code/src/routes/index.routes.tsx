import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login";
import Menu from "../pages/menu";
import Criar_Login from "../pages/criar_login";
import BottomRoutes from "./botton.routes";
import Criar_chamado from "../pages/criar_chamado";
import Perfil from "../pages/perfil";
import Visualizar_chamados from "../pages/chamados";
import BottomTecnicoRoutes from "./botton.tecnico.routes";
import Visualizar_chamados_tecnico from "../pages/cahamados_tecnico";
import Atender_chamados from "../pages/atender_chamado";




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
                name="BottomTecnicoRoutes"
                component={BottomTecnicoRoutes}
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
                name="chamados_tecnico"
                component={Visualizar_chamados_tecnico}
            />
            <Stack.Screen
                name="atender_chamado"
                component={Atender_chamados}
            />                
        </Stack.Navigator>
    )
}