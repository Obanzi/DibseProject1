import {useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {authentication} from './firebase';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    return authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.replace('Home');
      }
    });
  }, [navigation]);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(() => Alert.alert('Not a valid email or password'));
  };
  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
      })
      .catch(() => Alert.alert('User not found'));
  };

  const resetPassword = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert('Email sent');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <ImageBackground
      source={require('./components/images/BackgroundCropped.png')}
      style={styles.img}>
      <Text style={styles.VigorisStyle}>Vigoris</Text>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#009688"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="#009688"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={resetPassword}>
          <Text style={styles.buttonTextforgot}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: '100%',
    width: '100%',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  VigorisStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 60,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '20%',
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#009688',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#009688',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonTextforgot: {
    color: '#000',
    fontWeight: '700',
    fontSize: 14,
    marginTop: 10,
  },
  buttonOutlineText: {
    color: '#009688',
    fontWeight: '700',
    fontSize: 16,
  },
});
export default LoginScreen;
