import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Menu from "../pages/menu";
import Perfil from "../pages/perfil";
import Chamados from "../pages/chamados";
import Criar_Chamado from "../pages/criar_chamado";




const tab = createBottomTabNavigator();

export default function BottomRoutes(){
    return(
        <tab.Navigator
        initialRouteName="Menu"
            screenOptions={{
                headerShown:false,
                }
            }>

            <tab.Screen name="Menu" component={Menu}/>
            <tab.Screen name="CriarChamado" component={Criar_Chamado}/>
            <tab.Screen name="Chamados" component={Chamados}/>
            <tab.Screen name="Perfil" component={Perfil}/>
            
        </tab.Navigator>
    )
}
