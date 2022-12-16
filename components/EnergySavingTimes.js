import React, {Text, FlatList, View, StyleSheet, Image} from 'react-native';
import {ActivityIndicator, Card} from 'react-native-paper';
import {useEffect, useState} from 'react';

function EnergySavingTimes() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const getSavingTimes = async () => {
    try {
      const response = await fetch(
        'https://awareness.cloud.apg.at/api/v1/PeakHourStatus',
      );
      const json = await response.json();
      setData(json.StatusInfos);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSavingTimes();
  }, []);

  let items = data.map(status => {
    return new Date(status.utc);
  });
  items = items.filter(status => {
    return status.getDay() === new Date().getDay();
  });
  let times = [];
  while (items.length > 0) {
    let startDate = items[0];
    let endDate = null;
    for (var i = 1; i < items.length; i++) {
      if (
        items[i - 1].getHours().valueOf() ===
          items[i].getHours().valueOf() - 1 &&
        items[i + 1].getHours().valueOf() === items[i].getHours().valueOf() + 1
      ) {
        continue;
      }
      endDate = items[i];
      break;
    }
    items = items.slice(i + 1, items.length);
    if (endDate === null) {
      endDate = new Date();
      endDate.setMinutes(0);
      endDate.setHours(startDate.getHours());
    }
    endDate.setHours(endDate.getHours() + 1); // we always get the beginning of the hour, we need the end
    times.push({startDate: startDate, endDate: endDate});
  }
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={times}
          renderItem={({item}) => (
            <Text style={styles.text}>
              Von {item.startDate.getHours()}:{item.startDate.getMinutes()}
              {item.startDate.getMinutes()} bis {item.endDate.getHours()}:
              {item.endDate.getMinutes()}
              {item.startDate.getMinutes()}
            </Text>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: '#009688',
    fontWeight: 'bold',
    alignSelf: 'center',
    top: '5%',
    left: '0%',
  },
  container: {
    flex: 1,
    padding: 24,
    height: 100,
    width: '100%',
  },
});

export default EnergySavingTimes;
