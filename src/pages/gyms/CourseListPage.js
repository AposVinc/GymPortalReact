import React from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import CourseItem from './partial/CourseItem';
import {Card} from '../../components';
import {useSelector} from 'react-redux';
import {sCoursesLoading, sLoadedCourses} from '../../reducers/selectors';


export default function({ route, navigation }) {
  const { itemId } = route.params;
  const loading = useSelector(sCoursesLoading);
  const courses = useSelector(sLoadedCourses);

  if (loading || courses === null) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }
  if (courses.length === 0) {
    return <Text>Empty Course List</Text>;
  }

  return (
      <View style={styles.container}>
        <ScrollView>
          <Card>
            {courses.map((course, key) => (
                <CourseItem
                    key={`course-item-${course.id}`}
                    course={course}
                    navigation={navigation}
                />
            ))}
          </Card>
        </ScrollView>
      </View>
  );
};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
