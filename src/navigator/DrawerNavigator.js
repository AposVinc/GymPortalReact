import {
  createDrawerNavigator,
  DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerView,
} from '@react-navigation/drawer';
import React from 'react';
import GymNavigator from './GymNavigator';
import {useDispatch} from 'react-redux';
import {userLogout} from '../actions';


function CustomDrawerContent(props) {

  const dispatch = useDispatch();

  return (
      <DrawerContentScrollView {...props}>
        <DrawerItem label={'Profile'} onPress={ ()=>{} } />
        <DrawerItemList {...props} />
        <DrawerItem label={'Logout'} onPress={ ()=>{ dispatch(userLogout()); }} />
      </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>} >

        <Drawer.Screen name={'Gym List'} component={GymNavigator} />
        <Drawer.Screen name={'Favorite Gyms'} component={GymNavigator} />
        <Drawer.Screen name={'Favorite courses'} component={GymNavigator} />

      </Drawer.Navigator>
  )
}
