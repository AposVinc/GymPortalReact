import React from 'react';
import {Text, View} from 'react-native';


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
      </View>
  );

}

export default GymPage;
