/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';

function HomeScreen({navigation}) {
  return (
    <ScrollView style={styles.scrollView}>
      <Card style={styles.card}>
        <Card.Title title="Energiespartipps jetzt ansehen !" />
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('Energiespar Tipps !')}>
            Jetzt ansehen !
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="Graphen jetzt ansehen !" />
        <Card.Content>
          <Button mode="contained" onPress={() => navigation.navigate('Graph')}>
            Jetzt ansehen !
          </Button>
        </Card.Content>
      </Card>
      <Card style={styles.card}>
        <Card.Title title="StromsparZeiten jetzt ansehen !" />
        <Card.Content>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('StromSpar-Zeiten')}>
            Jetzt ansehen !
          </Button>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'black',
    paddingTop: 10,
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default HomeScreen;
