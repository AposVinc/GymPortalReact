import React from 'react';
import {Text, View} from 'react-native';


function CoursePage({ route }) {
  const { itemId } = route.params;

  return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Text>Course Page</Text>
        <Text>id: {itemId}</Text>
      </View>
  );

}

export default CoursePage;
