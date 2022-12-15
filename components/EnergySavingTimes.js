import React, {Text, FlatList, View} from 'react-native';
import { ActivityIndicator, Card } from "react-native-paper";
import {useEffect, useState} from 'react';

const EnergySavingTimes = (): Node => {
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

  var items = data.filter(status => {
    return new Date(status.utc).getDay() === new Date().getDay();
  });
  return (
    <View style={{flex: 1, padding: 24}}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={items}
          renderItem={({item}) => <Text>{new Date(item.utc).toString()}</Text>}
        />
      )}
    </View>
  );
};

export default EnergySavingTimes;
