import React from 'react';
import AddMesureScreen from './screens/AddMesure';
import MeasureListScreen from './screens/MeasureList';
import MeasureStatsScreen from './screens/MeasureStats';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Adicionar" component={AddMesureScreen} />
          <Tab.Screen name="Listagem" component={MeasureListScreen} />
          <Tab.Screen name="Stats" component={MeasureStatsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
