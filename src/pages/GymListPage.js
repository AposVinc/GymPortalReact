import React, {Component, useEffect} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import GymItem from './partial/GymItem';
import {Card} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  sGymLoadingGyms,
  sGymLoadedGyms,
  sFavoriteGymLoadedGyms, sAppLogged, sUserProps,
} from '../reducers/selectors';
import {favoriteGymFetch, gymFetch} from '../actions';

export default function({ navigation }) {
  const logged = useSelector(sAppLogged)
  const gyms = useSelector(sGymLoadedGyms);
  const loading = useSelector(sGymLoadingGyms);
  const favoriteGyms = useSelector(sFavoriteGymLoadedGyms);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteGymFetch())
    }, []);
  }

  useEffect(() => {
    dispatch(gymFetch())
  }, []);

  if (loading || gyms === null) {
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
                    isFavorite={favoriteGyms.some(fg => fg.id === gym.id)}
                    navigation={navigation}
                />
            ))}
          </Card>
        </ScrollView>
      </View>
  );

};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
