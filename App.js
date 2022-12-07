import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './HomeScreen';
import EnergyTipps from './EnergyTippsComponent';
import StromsparZeiten from './StromsparZeiten';
import Graph from './Graph';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Energy" component={EnergyTipps} />
          <Stack.Screen name="Graph" component={Graph} />
          <Stack.Screen name="StromSpar-Zeiten" component={StromsparZeiten} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
