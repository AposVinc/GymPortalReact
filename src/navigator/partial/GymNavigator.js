import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../../pages/gyms/GymListPage';
import GymPage from '../../pages/gyms/GymPage';
import CourseListPage from '../../pages/gyms/CourseListPage';
import CoursePage from '../../pages/gyms/CoursePage';
import React from 'react';
import {MenuButtom} from '../../components';
import FeedbackPage from '../../pages/gyms/FeedbackPage';

const GymStack = createStackNavigator();
export default function GymNavigator({navigation}) {
  return (
      <GymStack.Navigator>
        <GymStack.Screen name={'Gym List'} component={GymListPage} options={{
          headerLeft: () => (
              <MenuButtom
                  onPress={ () => { navigation.openDrawer(); } }
                  style={{
                    paddingLeft: 10
                  }}/>
          ),
        }} />
        <GymStack.Screen name={'Gym'} component={GymPage}/>
        <GymStack.Screen name={'Feedback'} component={FeedbackPage}/>
        <GymStack.Screen name={'Courses List'} component={CourseListPage}/>
        <GymStack.Screen name={'Course'} component={CoursePage}/>
      </GymStack.Navigator>
  )
}
