import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const EnergieTipp1Further = props => {
  return (
    <View style={styles.container}>
      <Text> EnergieTipp1 </Text>
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

export default EnergieTipp1Further;
