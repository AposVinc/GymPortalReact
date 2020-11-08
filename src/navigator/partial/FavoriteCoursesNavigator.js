import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MenuButtom} from '../../components';
import CoursePage from '../../pages/CoursePage';
import FavoriteCoursesPage from '../../pages/FavoriteCoursesPage';

const StackNavigator = createStackNavigator();
export default function FavoriteCoursesNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Favourite Courses'} component={FavoriteCoursesPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
        <StackNavigator.Screen name={'Course'} component={CoursePage}/>
      </StackNavigator.Navigator>
  )
}
