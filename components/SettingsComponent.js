import React from 'react';
import {ImageBackground, StyleSheet, View, Dimensions} from 'react-native';
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
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Turn notifications off"
            onPress={notificationsOff}
          />
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent title="Logout" onPress={functioncombined} />
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Give us Feedback :)"
            onPress={sendEmail.bind(
              'vigorisdibse@gmail.com',
              'Feedback Vigoris APP',
              'Hallo liebes Vigoris Team ! Hier ist mein Feedback an Euch: ',
            )}
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
  LogOutButton: {
    top: '30%',
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
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
    top: '58%',
  },
});

export default SettingsComponent;
