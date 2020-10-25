import React, {Component} from 'react';
import {Text, View, Linking, Button, TouchableOpacity} from 'react-native';

import {CardItem, FavoriteButton} from '../../components';
import {useDispatch} from 'react-redux';
import {handleFavorite} from '../../actions';

export default function({course, navigation}) {
  const dispatch = useDispatch();

  return(
        <TouchableOpacity onPress={() => navigation.navigate('Course', { itemId: course.id})}>
          <CardItem>
            <View style={styles.container}>
              <View style={styles.containerText}>
                <Text>Name: {course.name}</Text>
                <Text>Code: {course.code}</Text>
                <Text>Description: {course.description}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <FavoriteButton
                    onPress={this.handleFavoriteButtonPress}
                    favorite={true}
                    style={styles.button}
                />
              </View>
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
  thumb: {
    height: 50,
    width: 50,
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    width: 50,
  },
};
