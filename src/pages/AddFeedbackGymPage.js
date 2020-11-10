import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Card, CardItem, Input, ListButton} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {
  sFeedbacksCurrentFeedback, sFeedbacksExistingFeedbackByUserIdAndGymId,
} from '../reducers/FeedbackReducer';
import {
  feedbackChangeFeed, feedbackChangeId,
  feedbackChangeRating, feedbackGymAdd, feedbackGymUpdate,
  feedbackReset,
} from '../actions';
import {sUserProps} from '../reducers/UserReducer';

function AddFeedbackGymPage({ route, navigation }) {
  const { idGym } = route.params;
  const user = useSelector(sUserProps);
  const existingFeedback = useSelector(sFeedbacksExistingFeedbackByUserIdAndGymId(user.id, idGym));
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
      dispatch(feedbackGymUpdate(idGym));
    } else {
      dispatch(feedbackGymAdd(idGym))
    }
    navigation.goBack();
  }

  return (
      <View style={styles.container}>

        <Card style={styles.containerCard}>

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

export default AddFeedbackGymPage;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#FFFFFF'
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  containerCard:{
    backgroundColor: '#e1f5fe',
    borderRadius: 20,
    padding: 10,


  }
};
