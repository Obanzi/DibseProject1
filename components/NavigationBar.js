import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

function NavigationBar({navigation}) {
  const handlePress = () => {
    navigation.navigate('Settings');
    global.UserID = global.User;
  };

  return (
    <View style={styles.Navigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.HomeButton}
          source={require('./images/HomeButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
        <Image
          style={styles.SpartippsButton}
          source={require('./images/GraphButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Energiespar Tipps !')}>
        <Image
          style={styles.GraphButton}
          source={require('./images/ChartbarButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePress}>
        <Image
          style={styles.SettingsButton}
          source={require('./images/EinstellungsButton.png')}
        />
      </TouchableOpacity>
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
  SettingsButton: {
    height: 100,
    width: 100,
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  Navigation: {
    bottom: '0%',
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

export default NavigationBar;
