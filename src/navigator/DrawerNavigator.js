import {
  createDrawerNavigator,
  DrawerContentScrollView, DrawerItem, DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {useDispatch} from 'react-redux';
import {userLogout} from '../actions';
import ProfileNavigator from './partial/ProfileNavigator';
import GymNavigator from './partial/GymNavigator';

//https://stackoverflow.com/questions/60131376/set-header-for-drawer-navigation
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
        <Drawer.Screen name={'Favorite Gyms'} component={ProfileNavigator} />
        <Drawer.Screen name={'Favorite courses'} component={ProfileNavigator} />

      </Drawer.Navigator>
  )
}
