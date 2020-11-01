import {createStackNavigator} from '@react-navigation/stack';
import GymListPage from '../../pages/GymListPage';
import GymPage from '../../pages/GymPage';
import CourseListPage from '../../pages/CourseListPage';
import CoursePage from '../../pages/CoursePage';
import React from 'react';
import {MenuButtom} from '../../components';

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
        <GymStack.Screen name={'Courses List'} component={CourseListPage}/>
        <GymStack.Screen name={'Course'} component={CoursePage}/>
      </GymStack.Navigator>
  )
}
