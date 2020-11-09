import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Card, CardItem, Input, ListButton} from '../components';
import {useDispatch, useSelector} from 'react-redux';
import {sFeedbacksCurrentFeedback} from '../reducers/FeedbackReducer';
import {
  feedbackChangeFeed,
  feedbackChangeRating,
  feedbackReset,
} from '../actions';

function AddFeedbackPage({ route, navigation }) {
  const { idGym, editableFeedback } = route.param;
  const feedback = useSelector(sFeedbacksCurrentFeedback);
  const dispatch = useDispatch();

  useEffect(() => {
    return navigation.addListener('beforeRemove', () => {
      dispatch(feedbackReset());
    });
  }, [navigation]);

  const AddFeedback = function() {
    if( editableFeedback ){

    } else {

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

export default AddFeedbackPage;

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
