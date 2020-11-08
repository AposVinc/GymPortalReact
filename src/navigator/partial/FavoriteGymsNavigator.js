import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {MenuButtom} from '../../components';
import GymPage from '../../pages/GymPage';
import FeedbackPage from '../../pages/FeedbackPage';
import CourseListPage from '../../pages/CourseListPage';
import CoursePage from '../../pages/CoursePage';
import FavoriteGymsPage from '../../pages/FavoriteGymsPage';

const StackNavigator = createStackNavigator();
export default function FavoriteGymsNavigator({navigation}) {
  return (
      <StackNavigator.Navigator>
        <StackNavigator.Screen name={'Favourite Gyms'} component={FavoriteGymsPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }}/>
        <StackNavigator.Screen name={'Gym'} component={GymPage}/>
        <StackNavigator.Screen name={'Feedback'} component={FeedbackPage}/>
        <StackNavigator.Screen name={'Courses List'} component={CourseListPage}/>
        <StackNavigator.Screen name={'Course'} component={CoursePage}/>
      </StackNavigator.Navigator>
  )
}
