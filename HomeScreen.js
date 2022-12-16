/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import NavigationBar from './components/NavigationBar';

function HomeScreen({navigation}) {
  return (
    <View>
      <ImageBackground
        source={require('./components/images/BackgroundCropped.png')}
        style={styles.img}>
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
        <View style={styles.EnergiesparzeitenView}>
          <Image
            style={styles.Energiesparzeiten}
            source={require('./components/images/BeispielFotoEnergiesparZeiten.png')}
          />
        </View>
        <View style={styles.NaviBar}>
          <NavigationBar navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    top: '10%',
    left: '5%',
  },
  IdeaGuy: {
    width: 150,
    height: 200,
    top: '3%',
    left: '57%',
  },
  title: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '10%',
    left: '0%',
  },
  titleStromsparen: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '5%',
    left: '0%',
  },
  VigorisStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '7%',
    left: '28%',
  },
  Energiesparzeiten: {
    width: 220,
    height: 240,
    top: '20%',
    borderWidth: 3,
    borderColor: '#009688',
  },
  EnergiesparzeitenView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  NaviBar: {
    top: '7%',
  },
});

export default HomeScreen;
