import React, {Component, useEffect} from 'react';
import axios from 'axios';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import GymItem from './partial/GymItem';
import {Card} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {sLoadedGyms} from '../reducers/selectors';
import {gymFetched} from '../actions';

const URL_GYMS = 'http://10.0.2.2:8080/GymREST/rest/gyms';

export default function() {
  const gyms = useSelector(sLoadedGyms);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(URL_GYMS).
        then(response => response.data).
        then(data => { dispatch(gymFetched(data)); }).
        catch(error => {
          console.log(error);
        });
  }, []);

  console.log('gyms');
  console.log(gyms);

  if (!gyms) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }
  if (gyms.length === 0) {
    return <Text>Empty Gyms List</Text>;
  }

  return (
      <View style={styles.container}>
        <ScrollView>
          <Card>
            {gyms.map((gym, key) => (
                <GymItem
                    key={`gym-item-${gym.id}`}
                    gym={gym}
                />
            ))}
          </Card>
        </ScrollView>
      </View>
  );
}

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
