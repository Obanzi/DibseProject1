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
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {authentication} from './firebase';
import {signOut} from 'firebase/auth';

function HomeScreen({navigation}) {
  const signOutUser = () => {
    signOut(authentication)
      .then(() => {
        console.log('User signed out');
      })
      .catch(error => {
        console.log(error);
      });
  };
  const functioncombined = () => {
    signOutUser();
    navigation.navigate('LoginScreen');
  };

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
        <View style={styles.Navigation}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              style={styles.HomeButton}
              source={require('./components/images/HomeButton.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Energiespar Tipps !')}>
            <Image
              style={styles.SpartippsButton}
              source={require('./components/images/GraphButton.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
            <Image
              style={styles.GraphButton}
              source={require('./components/images/ChartbarButton.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('StromSpar-Zeiten')}>
            <Image
              style={styles.StromsparButton}
              source={require('./components/images/EinstellungsButton.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.SignOutButton}>
          <TouchableOpacity onPress={() => functioncombined()}>
            <Image
              style={styles.SignOutButton}
              source={require('./components/images/SignOutButton.png')}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeButton: {
    height: 100,
    width: 100,
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  SignOutButton: {
    height: 50,
    width: 50,
    left: '7%',
    top: '-82%',
  },
  SpartippsButton: {
    height: 100,
    width: 100,
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  GraphButton: {
    height: 100,
    width: 100,
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  StromsparButton: {
    height: 100,
    width: 100,
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  appButtonText: {
    fontSize: 1,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
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
  Navigation: {
    bottom: '-15%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HomeScreen;
