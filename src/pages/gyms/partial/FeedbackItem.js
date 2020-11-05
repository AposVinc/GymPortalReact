import React from 'react';
import {Text, View} from 'react-native';
import {CardItem} from '../../../components';

export default function({feedback}) {

  return (
      <CardItem>
        <View style={styles.container}>
          <Text>Id: {feedback.id}</Text>
        </View>
      </CardItem>
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
