import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import NavigationBar from './components/NavigationBar';
import EnergySavingTimes from './components/EnergySavingTimes';

function HomeScreen({navigation}) {
  let DateMonth = new Date().getMonth() + 1;
  let DateDay = new Date().getDate();
  let DateYear = new Date().getFullYear();

  const getStyle = () => ({
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : '-6%',
    width: Dimensions.get('window').width,
    justifyItems: 'center',
  });

  return (
    <View>
      <ImageBackground
        source={require('./components/images/BackgroundCropped.png')}
        style={styles.img}>
        <Image
          style={styles.logoEnergie}
          source={require('./components/images/BMIBild.png')}
        />
        <Text style={styles.VigorisStyle}>Vigoris</Text>
        <Text style={styles.title}>Energie-Spar-Tipp des Tages !</Text>
        <Image
          style={styles.logo}
          source={require('./components/images/EnergieSparTipp3.png')}
        />
        <Image
          style={styles.IdeaGuy}
          source={require('./components/images/IdeaGuy.png')}
        />
        <Text style={styles.titleStromsparen}>Aktuelle Stromsparzeiten</Text>
        <Text style={styles.titleProg}>
          Prognose der Stromspar-{'\n'}Stunden für {DateDay}.{DateMonth}.
          {DateYear}
        </Text>
        <Image
          style={styles.Clock}
          source={require('./components/images/Clock.png')}
        />
        <View style={styles.energySaving}>
          <EnergySavingTimes />
        </View>
        <View style={getStyle()}>
          <NavigationBar navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logoEnergie: {
    width: 200,
    height: 28,
    top: '6%',
  },
  Clock: {
    width: 80,
    height: 80,
    top: '8.5%',
    left: '40%',
  },
  energySaving: {
    top: '9%',
    width: '100%',
    height: '20%',
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
  logo: {
    width: 250,
    height: 160,
    top: '5%',
    left: '5%',
  },
  IdeaGuy: {
    width: 160,
    height: 200,
    top: '0%',
    left: '57%',
  },
  title: {
    fontSize: 22,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '5%',
    left: '0%',
    textDecorationLine: 'underline',
  },
  titleProg: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    top: '5%',
    left: '0%',
  },
  titleStromsparen: {
    fontSize: 25,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '3%',
    left: '0%',
    textDecorationLine: 'underline',
  },
  VigorisStyle: {
    fontStyle: 'italic',
    fontSize: 30,
    color: '#51565C',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '2.2%',
    left: '28%',
  },
  NaviBar: {
    position: 'absolute',
    bottom: '-6%',
    width: Dimensions.get('window').width,
  },
});

export default HomeScreen;
