import React, {useState} from 'react';
import {LineChart} from 'react-native-chart-kit';

import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput, Platform,
} from "react-native";
import NavigationBar from './NavigationBar';
import {authentication} from '../firebase';

function Graph({navigation}) {
  const [var1, setVar1] = useState(0);
  const [var2, setVar2] = useState(0);
  const [var3, setVar3] = useState(0);
  const [var4, setVar4] = useState(0);

  let Strompreis;
  if (authentication.currentUser.uid === '7wIwGnxXuNUkSXCfFGEcqsYXZK62') {
    Strompreis = global.price;
  } else {
    Strompreis = 0.25;
  }

  const Calculate = ({var12, Strompreis12}) => {
    let result = var12 * Strompreis12;
    if (isNaN(result)) {
      return 0;
    } else {
      result = result.toFixed(2);
      return result;
    }
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
        <Text style={styles.title}>Eigenverbrauch</Text>
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
                data: [var1, var2, var3, var4],
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
        <Text style={styles.titleEinspeisung}>Zählerstand</Text>
        <TextInput
          style={styles.input}
          placeholder="Energieverbrauch in kWh"
          placeholderTextColor="#009688"
          keyboardType="numeric"
          onChangeText={text => setVar1(text)}
          returnKeyType="done"
        />
        <Text style={styles.titleEinspeisung}>Aktuellen Kosten!</Text>
        <Text style={styles.titleKosten}>
          Die aktuellen Kosten belaufen sich auf:
        </Text>
        <View style={styles.Kosten}>
          <Text style={styles.textCalc}>
            {Calculate({var12: var1, Strompreis12: global.price})}€
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

const styles = StyleSheet.create({
  textCalc: {
    fontSize: 80,
    color: '#009688',
    fontWeight: 'bold',
  },
  Kosten: {
    top: '20%',
    width: 300,
    height: 300,
    left: '25%',
  },
  titleKosten: {
    top: '15%',
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
    top: '13%',
    left: '0%',
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
    top: '12%',
    left: '20%',
    width: '50%',
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    bottom: '0%',
    left: '0%',
  },
  aktuellerStrompreis: {
    top: '0%',
  },
});

export default Graph;
