import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView, Text,
  View,
} from 'react-native';
import {
  Card,
  CardItem,
  Input,
  InputLabel,
  ListButton,
  PageTitle,
} from '../components';
import {sUserLoading, sUserProps} from '../reducers/UserReducer';
import {
  courseFetch,
  favoriteCourseFetch,
  userFormChangeEmail, userFormChangeLastname,
  userFormChangeName, userFormChangePassword,
  userFormChangeUsername, userRefresh, userUpdate,
} from '../actions';
import {sAppLogged} from '../reducers/AppReducer';
import {sGymLoadedCourses, sGymLoading} from '../reducers/GymReducer';
import {sFavoriteCourses, sFavoriteLoading} from '../reducers/FavoriteReducer';
import CourseItem from './partial/CourseItem';
import GymItem from './partial/GymItem';


export default function({ navigation }) {
  const logged = useSelector(sAppLogged);
  const favoriteCourses = useSelector(sFavoriteCourses);
  const favoritesLoading = useSelector(sFavoriteLoading);
  const dispatch = useDispatch();

  if (logged){
    useEffect(() => {
      dispatch(favoriteCourseFetch());
    }, []);
  }

  if ( favoritesLoading ) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }
  if(favoriteCourses.length === 0) {
    return <Text>Empty Courses List</Text>;
  }

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={favoritesLoading} onRefresh={ () => {dispatch(favoriteCourseFetch());} } /> }
        >
          <Card>
            {favoriteCourses.map((course, key) => (
                <CourseItem
                    key={`course-item-${course.id}`}
                    course={course}
                    isFavorite={ true } //se si toglie funziona uguale ma scompare cuore
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
