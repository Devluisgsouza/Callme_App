import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Menu from "../pages/menu";
import Perfil from "../pages/perfil";
import Visualizar_chamados from "../pages/chamados";
import Criar_chamado from "../pages/criar_chamado";
import CustomTabBar from "../components/CustomTabBar";


const tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return (
        <tab.Navigator
            screenOptions={{
                headerShown:false
            }}
            tabBar={pros=><CustomTabBar {...pros}/>}      
        >
            <tab.Screen 
                name="Menu" 
                component={Menu}
                />
            <tab.Screen 
                name="criar_chamado"
                component={Criar_chamado}
                />
            <tab.Screen 
                name="chamados"
                component={Visualizar_chamados}
                />
            <tab.Screen 
                name="perfil"
                component={Perfil}
                />
            
        </tab.Navigator>
    );
}
