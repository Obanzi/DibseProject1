import React from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

const EnergieTipp2 = props => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/EnergieSparTipp2.png')}
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
  image: {
    width: '100%',
    height: 380,
  },
});

export default EnergieTipp2;
