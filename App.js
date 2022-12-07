import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';
import HomeScreen from './HomeScreen';
import EnergyTipps from './EnergyTippsComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Energy" component={EnergyTipps} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
