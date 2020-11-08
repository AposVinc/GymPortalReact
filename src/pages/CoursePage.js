import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {feedbacksCourseFetch, feedbacksGymFetch} from '../actions';
import {Card, CardItem, PageTitle} from '../components';
import FeedbackItem from './partial/FeedbackItem';
import FAB from 'react-native-fab';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import {sUserProps} from '../reducers/UserReducer';
import {
  sFeedbackLoading,
  sFeedbacksCourse,
} from '../reducers/FeedbackReducer';
import {sGymLoadedCoursesByGymIdAndCourseId} from '../reducers/GymReducer';


function CoursePage({ route, navigation }) {
  const { idGym, idCourse } = route.params;
  const user = useSelector(sUserProps);
  const course = useSelector(sGymLoadedCoursesByGymIdAndCourseId(idGym, idCourse));
  const feedbacks = useSelector(sFeedbacksCourse);
  const feedbacksLoading = useSelector(sFeedbackLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedbacksCourseFetch(idGym, idCourse));
  }, []);

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={feedbacksLoading} onRefresh={ () => {dispatch(feedbacksGymFetch(idCourse));} } /> }
        >
          <Card>

            <CardItem>
              <Text>
                id: {course.id}
              </Text>
            </CardItem>

          </Card>

          <Card>
            <CardItem>
              <PageTitle style={ styles.feedbacksTitle }>Feedbacks</PageTitle>
            </CardItem>

            {feedbacksLoading
                ? <ActivityIndicator size={'large'} color={'green'} />
                : ( feedbacks.length
                        ? feedbacks.map((feedback, key) => (
                            <FeedbackItem
                                key={`feedback-item-${feedback.id}`}
                                feedback={feedback}
                            />
                        ))
                        : <CardItem>
                          <Text> There Isn't Feedbacks</Text>
                        </CardItem>
                )
            }

          </Card>

        </ScrollView>

        <FAB
            buttonColor='rgb(254, 178, 7)'
            iconTextColor="#fff"
            onClickAction={() => navigation.navigate('Add Feedback')}
            iconTextComponent={
              feedbacks.some(f => f.user === user.id)
                  ? <Icon name='pencil-outline' type='ionicon' />
                  : <Icon name='star-outline' type='ionicon' />
            }
        />

      </View>
  );

}

export default CoursePage;


const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  feedbacksTitle: {
    fontSize: 16,
    textTransform:'capitalize'
  }
};
