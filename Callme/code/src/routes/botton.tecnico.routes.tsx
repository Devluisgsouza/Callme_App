import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Perfil from "../pages/perfil";
import CustomTecnicoTabBar from "../components/CustomTecnicoTabBar";
import Menu_Tecnico from "../pages/menu_tecnico";
import Visualizar_chamados_tecnico from "../pages/cahamados_tecnico";
import Atender_chamados from "../pages/atender_chamado";


const tab = createBottomTabNavigator();

export default function BottomTecnicoRoutes(){
    return (
        <tab.Navigator
            screenOptions={{
                headerShown:false
            }}
            tabBar={pros=><CustomTecnicoTabBar {...pros}/>}      
        >
            <tab.Screen 
                name="Menu_tecnico" 
                component={Menu_Tecnico}
                />
            <tab.Screen 
                name="chamados_tecnico" 
                component={Visualizar_chamados_tecnico}
                />
            <tab.Screen 
                name="atender_chamado"
                component={Atender_chamados}
                />
            <tab.Screen 
                name="perfil" 
                component={Perfil}
                />    
        </tab.Navigator>
    );
}
