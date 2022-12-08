import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const EnergieTipp1 = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>EnergieTipp1</Text>
      <Button
        title="Zurück"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
