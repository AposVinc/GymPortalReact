import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {CardItem, FavoriteButton} from '../../components';
import {useDispatch} from 'react-redux';
import {handleFavoriteCourse} from '../../actions';

export default function({course, isFavorite, navigation}) {
  const dispatch = useDispatch();

  const handleFavoriteButtonPress = function() {
    dispatch(handleFavoriteCourse(course, isFavorite));
  }

  return(
      <TouchableOpacity onPress={() => navigation.navigate('Course', { itemId: course.id})}>
        <CardItem>
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text>Name: {course.name}</Text>
              <Text>Code: {course.code}</Text>
              <Text>Description: {course.description}</Text>
            </View>
            { isFavorite !== undefined && ( //controllo per la pagina favoritegyms se si vuole togliere il isFavorite e percio il cuore
                <View style={{justifyContent: 'center'}}>
                  <FavoriteButton
                      onPress={ handleFavoriteButtonPress }
                      favorite={ isFavorite }
                      style={styles.button}
                  />
                </View>
            )}
          </View>
        </CardItem>
      </TouchableOpacity>
  );
}

const styles = {
  container: {
    width:'100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    justifyContent: 'space-around',
  },
};
