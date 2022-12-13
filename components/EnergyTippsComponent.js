/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  ScrollView,
  useColorScheme,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import EnergiesparTipp_1_component from './EnergieSparComponent/EnergiesparTipp_1_component';
import EnergiesparTipp_2_component from './EnergieSparComponent/EnergiesparTipp_2_component';
import EnergiesparTipp_3_component from './EnergieSparComponent/EnergiesparTipp_3_component';
import EnergiesparTipp_4_component from './EnergieSparComponent/EnergiesparTipp_4_component';
import EnergiesparTipp_5_component from './EnergieSparComponent/EnergiesparTipp_5_component';
import EnergiesparTipp_6_component from './EnergieSparComponent/EnergiesparTipp_6_component';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {sendEmail} from './EnergieSparComponent/ContactUs';

function EnergyTipps({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('./images/BackgroundCropped.png')}
        resizeMode="cover"
        style={styles.img}>
        <ScrollView>
          <View style={styles.container}>
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
              style={styles.appButtonContainer}
              onPress={() =>
                //Linking.openURL('mailto:heimay237@gmail.com')}
                sendEmail(
                  'vigorisdibse@gmail.com',
                  'Neuer Energiespartipp !',
                  'Hallo liebes Vigoris Team ! Ich habe einen neuen Energiespartipp für euch !',
                )
              }
            />
            <View style={styles.Navigation}>
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image
                  style={styles.HomeButton}
                  source={require('./images/HomeButton.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Energiespar Tipps !')}>
                <Image
                  style={styles.SpartippsButton}
                  source={require('./images/GraphButton.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
                <Image
                  style={styles.GraphButton}
                  source={require('./images/ChartbarButton.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('StromSpar-Zeiten')}>
                <Image
                  style={styles.StromsparButton}
                  source={require('./images/EinstellungsButton.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
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
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginTop: 20,
    marginBottom: '25.5%',
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
    marginTop: 50,
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
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  HomeButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  SpartippsButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  GraphButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  StromsparButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 160,
    position: 'absolute',
    top: '17%',
    left: '5%',
  },
  IdeaGuy: {
    width: 150,
    height: 200,
    position: 'absolute',
    top: '28%',
    left: '57%',
  },
  title: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '14%',
    left: '10%',
  },
  titleStromsparen: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '53%',
    left: '10%',
  },
  VigorisStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '7%',
    left: '60%',
  },
  Energiesparzeiten: {
    width: 220,
    height: 240,
    top: '200%',
    borderWidth: 3,
    borderColor: '#009688',
  },
  EnergiesparzeitenView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default EnergyTipps;
