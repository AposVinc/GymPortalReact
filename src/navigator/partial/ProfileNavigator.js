import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../../pages/profile/ProfilePage';
import React from 'react';
import {MenuButtom} from '../../components';

const ProfileStack = createStackNavigator();
export default function ProfileNavigator({navigation}) {
  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name={'Profile'} component={Profile} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
      </ProfileStack.Navigator>
  )
}
