import {
  createDrawerNavigator,
  DrawerContentScrollView, DrawerItem, DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../actions';
import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../pages/GymListPage';
import GymPage from '../pages/GymPage';
import CoursePage from '../pages/CoursePage';
import Profile from '../pages/ProfilePage';

//https://stackoverflow.com/questions/60131376/set-header-for-drawer-navigation
const GymStack = createStackNavigator();
function GymNavigator() {
  return (
      <GymStack.Navigator>
        <GymStack.Screen name={'Gym List'} component={GymListPage} />
        <GymStack.Screen name={'Gym'} component={GymPage}/>
        <GymStack.Screen name={'Course'} component={CoursePage}/>
      </GymStack.Navigator>
  )
}

const ProfileStack = createStackNavigator();
function ProfileNavigator() {
  return (
      <ProfileStack.Navigator>
        <ProfileStack.Screen name={'Profile'} component={Profile} />
      </ProfileStack.Navigator>
  )
}


function CustomDrawerContent(props) {
  const dispatch = useDispatch();
  return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={ ()=>{ dispatch(userLogout()); }} />
      </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName={'Gym List'} drawerContent={props => <CustomDrawerContent {...props}/>} >

        <Drawer.Screen name={'Profile'} component={ProfileNavigator} />
        <Drawer.Screen name={'Gym List'} component={GymNavigator} />
        <Drawer.Screen name={'Favorite Gyms'} component={Profile} />
        <Drawer.Screen name={'Favorite courses'} component={Profile} />

      </Drawer.Navigator>
  )
}
