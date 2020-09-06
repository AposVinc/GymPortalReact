import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GymListPage from '../pages/GymListPage';
import GymPage from '../pages/GymPage';
import CourseListPage from '../pages/CourseListPage';
import CoursePage from '../pages/CoursePage';

const RootStack = createStackNavigator();

export default function() {
  return (
      <NavigationContainer>
        <RootStack.Navigator>

          <RootStack.Screen name={'Gym List'} component={GymListPage}/>
          <RootStack.Screen name={'Gym'} component={GymPage}/>
          <RootStack.Screen name={'Gym'} component={CourseListPage}/>
          <RootStack.Screen name={'Gym'} component={CoursePage}/>

        </RootStack.Navigator>
      </NavigationContainer>
  );
}
