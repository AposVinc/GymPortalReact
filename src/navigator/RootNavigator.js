import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GymListPage from '../pages/GymListPage';
import GymPage from '../pages/GymPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import {sAppLogged} from '../reducers/AppReducer';
import {useSelector} from 'react-redux';

const RootStack = createStackNavigator();

export default function() {
  const logged = useSelector(sAppLogged);

  return (
      <NavigationContainer>
        <RootStack.Navigator>
          {!logged && (
              <>
                <RootStack.Screen name={'SignIn'} component={LoginPage}/>
                <RootStack.Screen name={'SignUp'} component={SignUpPage}/>
              </>
          )}
          {logged && (
              <>
                <RootStack.Screen name={'Gym List'} component={GymListPage}/>
                <RootStack.Screen name={'Gym'} component={GymPage}/>
              </>
          )}
        </RootStack.Navigator>
      </NavigationContainer>
  );
}
