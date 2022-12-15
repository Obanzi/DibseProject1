import React from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  Dimensions,
} from 'react-native';
import EnergiesparTipp_1_component from './EnergieSparComponent/EnergiesparTipp_1_component';
import EnergiesparTipp_2_component from './EnergieSparComponent/EnergiesparTipp_2_component';
import EnergiesparTipp_3_component from './EnergieSparComponent/EnergiesparTipp_3_component';
import EnergiesparTipp_4_component from './EnergieSparComponent/EnergiesparTipp_4_component';
import EnergiesparTipp_5_component from './EnergieSparComponent/EnergiesparTipp_5_component';
import EnergiesparTipp_6_component from './EnergieSparComponent/EnergiesparTipp_6_component';

import {sendEmail} from './EnergieSparComponent/ContactUs';
import NavigationBar from './NavigationBar';

function EnergyTipps({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('./images/BackgroundCropped.png')}
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
                sendEmail(
                  'vigorisdibse@gmail.com',
                  'Neuer Energiespartipp !',
                  'Hallo liebes Vigoris Team ! Ich habe einen neuen Energiespartipp für euch !',
                )
              }
            />
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
  appButtonContainer: {
    elevation: 20,
    backgroundColor: '#009688',
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginTop: 20,
    marginBottom: '0%',
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
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});

export default EnergyTipps;
