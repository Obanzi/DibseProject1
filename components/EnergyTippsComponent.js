/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  StyleSheet,
} from 'react-native';
import EnergiesparTipp_1_component from './EnergieSparComponent/EnergiesparTipp_1_component';
import EnergiesparTipp_2_component from './EnergieSparComponent/EnergiesparTipp_2_component';
import EnergiesparTipp_3_component from './EnergieSparComponent/EnergiesparTipp_3_component';
import EnergiesparTipp_4_component from './EnergieSparComponent/EnergiesparTipp_4_component';
import EnergiesparTipp_5_component from './EnergieSparComponent/EnergiesparTipp_5_component';
import EnergiesparTipp_6_component from './EnergieSparComponent/EnergiesparTipp_6_component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function EnergyTipps() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.white : Colors.white,
          }}>
          <EnergiesparTipp_1_component />
          <EnergiesparTipp_2_component />
          <EnergiesparTipp_3_component />
          <EnergiesparTipp_4_component />
          <EnergiesparTipp_5_component />
          <EnergiesparTipp_6_component />
          <Button
            style={styles.button}
            title="Send us a message ! :)"
            onPress={() => Linking.openURL('mailto:heimay237@gmail.com')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  button: {
    backgroundColor: 'red',
    color: 'green',
    padding: 100,
    borderRadius: 5,
    fontSize: 200,
    hight: 100,
    width: 100,
  },
});

export default EnergyTipps;
