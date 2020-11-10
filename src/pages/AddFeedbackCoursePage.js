import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Card, CardItem, Input, ListButton} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  sFeedbacksCurrentFeedback,
  sFeedbacksExistingFeedbackByUserIdAndCourseId,
} from '../reducers/FeedbackReducer';
import {
  feedbackChangeFeed,
  feedbackChangeId,
  feedbackChangeRating,
  feedbackCourseAdd,
  feedbackCourseUpdate,
  feedbackReset,
} from '../actions';
import {sUserProps} from '../reducers/UserReducer';

function AddFeedbackCoursePage({ route, navigation }) {
  const { idGym, idCourse } = route.params;
  const user = useSelector(sUserProps);
  const existingFeedback = useSelector(sFeedbacksExistingFeedbackByUserIdAndCourseId(user.id, idCourse));
  const feedback = useSelector(sFeedbacksCurrentFeedback);
  const dispatch = useDispatch();

  useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      dispatch(feedbackReset());
    });
  }, [navigation]);

  if (existingFeedback){
    useEffect( () => {
      dispatch(feedbackChangeId(existingFeedback.id))
      dispatch(feedbackChangeRating(existingFeedback.rating));
      dispatch(feedbackChangeFeed(existingFeedback.feed));
    }, []);
  }

  const AddFeedback = function() {
    if( existingFeedback ){
      dispatch(feedbackCourseUpdate(idGym, idCourse));
    } else {
      dispatch(feedbackCourseAdd(idGym, idCourse))
    }
    navigation.goBack();
  }

  return (
      <View style={styles.container}>

        <Card>

          <CardItem>
            <Rating
                ratingCount={5}
                startingValue={feedback.rating}
                onFinishRating={(value)=>{dispatch(feedbackChangeRating(value))}}
            />
          </CardItem>
          <CardItem>
            <Input
                textarea
                placeholder={'name'}
                handleChangeText={(value) => {dispatch(feedbackChangeFeed(value))}}
                value={feedback.feed}
            />
          </CardItem>

        </Card>

        <ListButton
            onPress={ () => AddFeedback()}
            text={'Add Feedback'}
            style={ styles.button }
        />

      </View>
  );

}

export default AddFeedbackCoursePage;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
};
