import React, {useEffect} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  RefreshControl,
} from 'react-native';
import CourseItem from './partial/CourseItem';
import {Card} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  sAppLogged, sFavoriteCourses, sFavoriteLoading, sGymLoadedCoursesByGymId,
  sGymLoading,
} from '../reducers/selectors';
import {
  coursesFetch,
  favoriteCourseFetch,
} from '../actions';

export default function({ route, navigation }) {
  const { idGym } = route.params;
  const logged = useSelector(sAppLogged);
  const courses = useSelector(sGymLoadedCoursesByGymId(idGym));
  const courseLoading = useSelector(sGymLoading);
  const favoriteCourses = useSelector(sFavoriteCourses);
  const favoritesLoading = useSelector(sFavoriteLoading);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteCourseFetch());
    }, []);
  }

  useEffect(() => {
    dispatch(coursesFetch(idGym));
  }, []);

  if (courseLoading || favoritesLoading || courses === undefined) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }
  if(courses.length === 0) {
    return <Text>Empty Courses List</Text>;
  }

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={courseLoading && favoritesLoading} onRefresh={ () => {dispatch(coursesFetch(idGym)); dispatch(favoriteCourseFetch());} } /> }
        >
          <Card>
            {courses.map((course, key) => (
                <CourseItem
                    key={`course-item-${course.id}`}
                    course={course}
                    isFavorite={ favoriteCourses.some(fc => fc.id === course.id) }
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
    backgroundColor: '#FFFFFF'

  },
};
