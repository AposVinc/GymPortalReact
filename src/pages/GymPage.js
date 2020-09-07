import React from 'react';
import {Text, View} from 'react-native';
import CourseListPage from './CourseListPage';


function GymPage({ route }) {
  const { itemId } = route.params;

  return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Gym Page</Text>
        <Text>id: {itemId}</Text>
        <CourseListPage idGym={itemId}/>
      </View>
  );

}

export default GymPage;
