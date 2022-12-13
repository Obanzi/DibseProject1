import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './HomeScreen';
import EnergyTipps from './components/EnergyTippsComponent';
import StromsparZeiten from './components/StromsparZeiten';
import Graph from './components/Graph';
import registerNNPushToken from 'native-notify';


const Stack = createNativeStackNavigator();

export default function App() {
  registerNNPushToken(5300, 'pF8di0UaJNQKdsewqrvpo5');
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Energiespar Tipps !"
            component={EnergyTipps}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Graph"
            component={Graph}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="StromSpar-Zeiten"
            component={StromsparZeiten}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
