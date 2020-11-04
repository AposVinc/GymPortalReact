import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CardItem, FavoriteButton} from '../../../components';
import {useDispatch} from 'react-redux';
import {handleFavoriteGym} from '../../../actions';

export default function({gym, isFavorite, navigation}) {
  const dispatch = useDispatch();

  const handleFavoriteButtonPress = function() {
    dispatch(handleFavoriteGym(gym, isFavorite));
  }

  return (
      <TouchableOpacity onPress={() => { navigation.navigate('Gym', {itemId: gym.id})}}>
        <CardItem>
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text>Name: {gym.name}</Text>
              <Text>Reg: {gym.region}</Text>
              <Text>Prov: {gym.province}</Text>
              <Text>Addr: {gym.address}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <FavoriteButton
                  onPress={ handleFavoriteButtonPress }
                  favorite={isFavorite}
                  style={ styles.button }
              />
            </View>
          </View>
        </CardItem>
      </TouchableOpacity>
  );

}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    justifyContent: 'space-around',
  },
  thumb: {
    height: 50,
    width: 50,
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    width: 100,
  },
};