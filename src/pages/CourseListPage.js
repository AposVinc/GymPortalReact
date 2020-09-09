import React, {Component, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import CourseItem from './partial/CourseItem';
import {Card} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {sCoursesLoading, sLoadedCourses} from '../reducers/selectors';
import {courseFetch} from '../actions';


export default function({navigation, idGym}) {
  const courses = useSelector(sLoadedCourses);
  const loading = useSelector(sCoursesLoading);
  const dispatch = useDispatch();

  console.log(idGym);

  useEffect(() => {
    dispatch(courseFetch(idGym))
  }, []);

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
