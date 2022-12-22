import React, {useEffect, useState} from 'react';
import {LineChart} from 'react-native-chart-kit';

import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NavigationBar from './NavigationBar';
import {authentication} from '../firebase';
import * as SecureStore from 'expo-secure-store';

function Graph({navigation}) {
  const [var1, setVar1] = useState(0);
  let var2 = Math.floor(Math.random() * 1000);
  let var3 = Math.floor(Math.random() * 1000);
  let var4 = Math.floor(Math.random() * 1000);
  let var5 = Math.floor(Math.random() * 1000);
  let var6 = Math.floor(Math.random() * 1000);
  let var7 = Math.floor(Math.random() * 1000);
  let var8 = Math.floor(Math.random() * 1000);
  let var9 = Math.floor(Math.random() * 1000);
  let var10 = Math.floor(Math.random() * 1000);
  let var11 = Math.floor(Math.random() * 1000);
  let var12 = Math.floor(Math.random() * 1000);

  let Strompreis;
  if (authentication.currentUser.uid === '7wIwGnxXuNUkSXCfFGEcqsYXZK62') {
    if (global.price === undefined) {
      Strompreis = 0.29;
    } else {
      Strompreis = global.price;
    }
  } else {
    Strompreis = 0.25;
  }

  const Calculate = ({varWert, Strompreis12}) => {
    let result;
    if (varWert === undefined || Strompreis12 === undefined) {
      return 0 + '.00';
    } else {
      result = varWert * Strompreis12;
    }
    if (isNaN(result)) {
      return 0 + '.00';
    } else {
      result = parseFloat(result).toFixed(2);
      return result;
    }
  };

  const getStyle = () => ({
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 0 : '-6%',
    width: Dimensions.get('window').width,
  });

  const saveValue = () => {
    save(authentication.currentUser.uid, var1);
    getValueForPrice(authentication.currentUser.uid).then(r => {
      console.log(r);
      alert('Values have been saved');
    });
  };

  async function save(keys, value) {
    await SecureStore.setItemAsync(keys, value);
  }
  async function getValueForPrice(keys) {
    return await SecureStore.getItemAsync(keys);
  }

  return (
    <View>
      <ImageBackground
        source={require('./images/BackgroundCropped.png')}
        style={styles.img}>
        <Text style={styles.title}>Eigenverbrauch.</Text>
        <LineChart
          data={{
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                data: [
                  var1,
                  var2,
                  var3,
                  var4,
                  var5,
                  var6,
                  var7,
                  var8,
                  var9,
                  var10,
                  var11,
                  var12,
                ],
              },
            ],
          }}
          width={Dimensions.get('window').width} // from react-native
          height={260}
          yAxisSuffix="kwh"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#009688',
            backgroundGradientFrom: '#009688',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 0,
            top: 90,
          }}
        />
        <Text style={styles.titleZaehlerstand}>Zählerstand</Text>
        <TextInput
          style={styles.input}
          placeholder="Zählerstand"
          placeholderTextColor="#009688"
          keyboardType="numeric"
          onChangeText={text => setVar1(text)}
          value={var1}
          returnKeyType="done"
          clearButtonMode={'always'}
        />
        <AppButton
          title="Speichern"
          style={styles.button}
          onPress={() => {
            saveValue();
          }}
        />
        <Text style={styles.titleEinspeisung}>Aktuellen Kosten</Text>
        <Text style={styles.titleKosten}>
          Die aktuellen Kosten belaufen sich auf:
        </Text>
        <View style={styles.Kosten}>
          <Text style={styles.textCalc}>
            {Calculate({varWert: var1, Strompreis12: Strompreis})}€
          </Text>
        </View>
        <View style={styles.aktuellerStrompreis}>
          <Text style={styles.text}>
            Ihr aktueller Strompreis beträgt {Strompreis} €/kwh
          </Text>
        </View>
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
  inputView: {
    left: 20,
    top: 100,
  },
  textCalc: {
    fontSize: 60,
    color: '#009688',
    fontWeight: 'bold',
    bottom: 60,
    alignSelf: 'center',
  },
  textStyleNormal2: {
    fontSize: 13,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  Kosten: {
    top: '20%',
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  titleKosten: {
    top: '8%',
    fontSize: 20,
    textAlign: 'center',
    color: '#009688',
  },
  title: {
    fontSize: 27,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '8%',
    left: '0%',
  },
  titleEinspeisung: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '8%',
    left: '0%',
  },
  titleZaehlerstand: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    top: '11%',
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
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
  },
  input: {
    height: 40,
    margin: 19,
    borderWidth: 2,
    top: '10%',
    left: '20%',
    width: '30%',
    borderRadius: 2,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    bottom: 45,
  },
  aktuellerStrompreis: {
    top: '0%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#009688',
    padding: 12.2,
    width: '25%',
    borderRadius: 2,
    top: '3.6%',
    left: '55.5%',
  },
});

export default Graph;
