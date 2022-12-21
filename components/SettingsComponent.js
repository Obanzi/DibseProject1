import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Dimensions,
  Text,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import NavigationBar from './NavigationBar';
import ButtonComponent from './ButtonComponent';
import {authentication} from '../firebase';
import {signOut} from 'firebase/auth';
import {sendEmail} from './EnergieSparComponent/ContactUs';
import * as SecureStore from 'expo-secure-store';

function SettingsComponent({navigation}) {
  const [key, onChangeKey] = React.useState(global.user);
  const [price, onChangePrice] = React.useState('');
  const [result, onChangeResult] = React.useState('');
  const [zaehler, onChangeZaehler] = React.useState(0);

  global.userID = global.user;
  global.price = result;

  async function save(keys, value) {
    await SecureStore.setItemAsync(keys, value);
  }
  async function getValueForPrice(keys) {
    let result1 = await SecureStore.getItemAsync(keys);
    if (result1) {
      onChangeResult(result1);
    } else {
      onChangeKey(0);
      alert('No value stored under that key.');
    }
  }

  const signOutUser = () => {
    signOut(authentication)
      .then(() => {
        global.user = '';
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

  const showPrice = () => {
    save(authentication.currentUser.uid, price);
    save(authentication.currentUser.uid, zaehler);
    onChangeZaehler('');
    onChangePrice('');
    getValueForPrice(authentication.currentUser.uid).then(r => {
      console.log(r);
      alert('Values have been saved');
    });
  };

  const getStyle = () => ({
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : '-6%',
    width: Dimensions.get('window').width,
  });

  return (
    <View>
      <ImageBackground
        source={require('./images/BackgroundCropped.png')}
        style={styles.img}>
        <Text style={styles.text}>EINSTELLUNGEN</Text>
        <View style={styles.LogOutButton}>
          <Text style={styles.textStyleNormal}>
            Hier Ihren aktuellen Strompreis erfassen
          </Text>
          <TextInput
            style={styles.inputPrice}
            placeholder="Strompreis"
            placeholderTextColor="#009688"
            keyboardType="numeric"
            onChangeText={text => onChangeZaehler(text)}
            value={zaehler}
            returnKeyType="done"
          />
          <Text style={styles.textStyleNormal}>
            Ersten abgelesenen Zählerstand erfassen
          </Text>
          <TextInput
            style={styles.inputCounter}
            placeholder="Zählerstand"
            placeholderTextColor="#009688"
            keyboardType="numeric"
            onChangeText={text => onChangePrice(text)}
            value={price}
            returnKeyType="done"
          />
          <View style={styles.saving}>
            <AppButton
              title="Speichern"
              onPress={() => {
                showPrice();
              }}
            />
          </View>
        </View>
        <View style={styles.LogOutButton}>
          <ButtonComponent
            title="Benachrichtigungen aus"
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
        <View style={getStyle()}>
          <NavigationBar navigation={navigation} />
        </View>
      </ImageBackground>
    </View>
  );
}

const AppButton = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.textStyleNormal2}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  saving: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#009688',
    borderRadius: 102,
    borderColor: 'black',
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    top: -100,
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
  textStyleNormal2: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 10,
  },
  inputPrice: {
    height: 40,
    margin: 1,
    borderWidth: 2,
    width: '50%',
    borderRadius: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  inputCounter: {
    height: 40,
    margin: 1,
    borderWidth: 2,
    width: '50%',
    borderRadius: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginBottom: 100,
  },
  text1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
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
    marginTop: 10,
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
  button: {
    top: '30%',
    left: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 102,
    borderStyle: 'dotted',
  },
});

export default SettingsComponent;
