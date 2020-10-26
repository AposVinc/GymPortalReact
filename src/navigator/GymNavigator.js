import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../pages/GymListPage';
import React from 'react';
import GymPage from '../pages/GymPage';
import CoursePage from '../pages/CoursePage';

const Stack = createStackNavigator();

export default function() {
  return (
      <Stack.Navigator>

        <Stack.Screen name={'Gym List'} component={GymListPage} />
        <Stack.Screen name={'Gym'} component={GymPage}/>
        <Stack.Screen name={'Course'} component={CoursePage}/>

      </Stack.Navigator>
  )
}
