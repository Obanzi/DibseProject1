import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Tooltip from 'react-native-walkthrough-tooltip';

function NavigationBar({navigation}) {
  return (
    <View style={styles.Navigation}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.HomeButton}
          source={require('./images/HomeButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Energiespar Tipps !')}>
        <Image
          style={styles.SpartippsButton}
          source={require('./images/GraphButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Graph')}>
        <Image
          style={styles.GraphButton}
          source={require('./images/ChartbarButton.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('StromSpar-Zeiten')}>
        <Image
          style={styles.StromsparButton}
          source={require('./images/EinstellungsButton.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  appButtonContainer: {
    elevation: 20,
    backgroundColor: '#009688',
    paddingVertical: 10,
    paddingHorizontal: 70,
    marginTop: 20,
    marginBottom: '25.5%',
  },
  appButtonText: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  textStyleHeader: {
    fontSize: 30,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    marginTop: 50,
    marginBottom: 20,
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
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    textAlignVertical: 'top',
  },
  inputView: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  img: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
  HomeButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  SpartippsButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  GraphButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  StromsparButton: {
    height: 100,
    width: 100,
    position: 'center',
    left: '0%',
    bottom: 0,
    borderWidth: 3,
    borderColor: '#009688',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 160,
    position: 'absolute',
    top: '17%',
    left: '5%',
  },
  IdeaGuy: {
    width: 150,
    height: 200,
    position: 'absolute',
    top: '28%',
    left: '57%',
  },
  title: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '14%',
    left: '10%',
  },
  titleStromsparen: {
    fontSize: 20,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '53%',
    left: '10%',
  },
  VigorisStyle: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
    fontSize: 30,
    color: '#000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
    position: 'absolute',
    top: '7%',
    left: '60%',
  },
  Energiesparzeiten: {
    width: 220,
    height: 240,
    top: '200%',
    borderWidth: 3,
    borderColor: '#009688',
  },
  EnergiesparzeitenView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Navigation: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default NavigationBar;
