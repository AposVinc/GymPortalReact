import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../pages/ProfilePage';
import React from 'react';

const ProfileStack = createStackNavigator();
export default function ProfileNavigator() {
  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name={'Profile'} component={Profile} />
      </ProfileStack.Navigator>
  )
}
