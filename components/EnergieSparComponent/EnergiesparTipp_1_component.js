import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import EnergiesparTipp_1_further_component from './FurtherInformationComponent/EnergiesparTipp_1_further_component';

const EnergieTipp1 = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={<EnergiesparTipp_1_further_component />}>
        <Image
          source={require('../images/EnergieSparTipp1.png')}
          style={styles.image}
        />
      </TouchableOpacity>
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

export default EnergieTipp1;
