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
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import EnergiesparTipp_1_component from './EnergieSparComponent/EnergiesparTipp_1_component';
import EnergiesparTipp_2_component from './EnergieSparComponent/EnergiesparTipp_2_component';
import EnergiesparTipp_3_component from './EnergieSparComponent/EnergiesparTipp_3_component';
import EnergiesparTipp_4_component from './EnergieSparComponent/EnergiesparTipp_4_component';
import EnergiesparTipp_5_component from './EnergieSparComponent/EnergiesparTipp_5_component';
import EnergiesparTipp_6_component from './EnergieSparComponent/EnergiesparTipp_6_component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Spacer(props: { height: number }) {
  return null;
}

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
          <Text style={styles.textStyleHeader}>Energiespar-Tipps</Text>
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Heinz am 22.12.2022
          </Text>
          <EnergiesparTipp_1_component />
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Judith am 19.12.2022
          </Text>
          <EnergiesparTipp_2_component />
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Martin am 15.12.2022
          </Text>
          <EnergiesparTipp_3_component />
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Matthias am 12.12.2022
          </Text>
          <EnergiesparTipp_4_component />
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Philipp am 09.12.2022
          </Text>
          <EnergiesparTipp_5_component />
          <Text style={styles.textStyleNormal}>
            Energiespartipp von Nic am 05.12.2022
          </Text>
          <EnergiesparTipp_6_component />
          <AppButton
            title="Schicke uns deine Energiespartipps ! :)"
            onPress={() => Linking.openURL('mailto:heimay237@gmail.com')}
          />
        </View>
        <View style={styles.inputView}>
          <Spacer height={20} />
          <TextInput
            label={'Schicke uns deine Energiespartipps ! :)'}
            multiline
            inputStyle={styles.inputStyle}
          />
          <Spacer height={20} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  appButtonContainer: {
    elevation: 20,
    backgroundColor: '#009688',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginTop: 20,
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textStyleHeader: {
    fontSize: 30,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 20,
  },
  textStyleNormal: {
    fontSize: 13,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    marginBottom: 5,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  inputView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
});

export default EnergyTipps;
