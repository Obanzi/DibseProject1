import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
} from 'react-native';
import NavigationBar from './NavigationBar';
import ButtonComponent from './ButtonComponent';
import {authentication} from '../firebase';
import {signOut} from 'firebase/auth';
import {sendEmail} from './EnergieSparComponent/ContactUs';

function SettingsComponent({navigation}) {
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

  const notificationsOff = () => {
    alert('Notifications are turned off');
  };

  return (
    <View>
      <ImageBackground
        source={require('./images/BackgroundCropped.png')}
        style={styles.img}>
        <Text style={styles.text}>EINSTELLUNGEN</Text>
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Aktuellen Strompreis erfassen"
            onPress={notificationsOff}
            style={styles.button}
          />
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Benachrichtigungen aussch"
            onPress={notificationsOff}
          />
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent title="Ausloggen" onPress={functioncombined} />
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Feedback :)"
            onPress={() =>
              sendEmail(
                'vigorisdibse@gmail.com',
                'Feedback Vigoris APP',
                'Hallo liebes Vigoris Team ! Hier ist mein Feedback an Euch: ',
              )
            }
          />
        </View>
        <Text style={styles.textEnd}>Thank you for using Vigoris!</Text>
        <Text style={styles.textEnd}>Version 0.1</Text>
        <View style={styles.NaviBar}>
          <NavigationBar navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#009688',
    textAlign: 'center',
    marginTop: 20,
    top: '15%',
  },
  textEnd: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#009688',
    textAlign: 'center',
    top: '35%',
  },
  LogOutButton: {
    top: '30%',
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
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
  NaviBar: {
    top: '36%',
  },
  button: {
    fontSize: 20,
  },
});

export default SettingsComponent;
