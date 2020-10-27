import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../../pages/GymListPage';
import GymPage from '../../pages/GymPage';
import CoursePage from '../../pages/CoursePage';
import React from 'react';

const GymStack = createStackNavigator();
export default function GymNavigator() {
  return (
      <GymStack.Navigator>
        <GymStack.Screen name={'Gym List'} component={GymListPage} />
        <GymStack.Screen name={'Gym'} component={GymPage}/>
        <GymStack.Screen name={'Course'} component={CoursePage}/>
      </GymStack.Navigator>
  )
}
