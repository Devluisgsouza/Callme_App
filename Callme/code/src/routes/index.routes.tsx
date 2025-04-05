import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../pages/login";
import Menu from "../pages/menu";
import Criar_Login from "../pages/criar_login";
import BottomRoutes from "./botton.routes";



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
                name="Menu"
                component={Menu}
            />
            <Stack.Screen
                name="Criar_login"
                component={Criar_Login}
            />

        </Stack.Navigator>
    )
}