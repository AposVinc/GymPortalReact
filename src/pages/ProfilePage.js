import {useDispatch, useSelector} from 'react-redux';
import {sAppLogged} from '../reducers/AppReducer';
import React from 'react';
import {Text, View} from 'react-native';


export default function() {
  const logged = useSelector(sAppLogged);
  const dispatch = useDispatch();

  return (
      <View style={styles.container}>

      </View>
  );

};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
