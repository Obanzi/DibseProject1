import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const EnergieTipp5 = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/EnergieSparTipp5.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
  image: {
    width: '100%',
    height: 290,
  },
});

export default EnergieTipp5;
