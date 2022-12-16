import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

export default function Button({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#009688',
    padding: 17,
    borderRadius: 4,
    alignItems: 'center',
    width: '100%',
  },
  text: {
    fontSize: 20,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
