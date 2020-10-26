import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import CourseListPage from './CourseListPage';


function GymPage({ route, navigation }) {
  const { itemId } = route.params;

  return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Gym Page</Text>
        <Text>id: {itemId}</Text>
        <CourseListPage idGym={itemId} navigation={navigation}/>
      </View>
  );

}

export default GymPage;
