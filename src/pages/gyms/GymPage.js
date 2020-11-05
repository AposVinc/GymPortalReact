import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {
  Card,
  CardItem,
  ListButton,
  PageTitle,
} from '../../components';
import FeedbackItem from './partial/FeedbackItem';
import {sGymLoadedGyms} from '../../reducers/GymReducer';
import {sFeedbackList, sFeedbackLoading} from '../../reducers/FeedbackReducer';
import {feedbacksGymFetch} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';


function GymPage({ route, navigation }) {
  const { itemId } = route.params;
  const gym = useSelector(sGymLoadedGyms).find( (el) => el.id === itemId);
  const feedbacks = useSelector(sFeedbackList);
  const feedbacksLoading = useSelector(sFeedbackLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(feedbacksGymFetch(itemId));
  }, []);

  return (
      <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}>
        <Card>

          <CardItem>
            <PageTitle>{gym.name}</PageTitle>
          </CardItem>

          <CardItem >
            <Text>
              Region: {gym.region}
            </Text>
          </CardItem>

          <CardItem >
            <Text>
              Province: {gym.province}
            </Text>
          </CardItem>

          <CardItem >
            <Text>
              Address: {gym.address}
            </Text>
          </CardItem>

        </Card>

        <ListButton
            onPress={ () => {
              navigation.navigate('Courses List', {itemId}); }
            }
            text={'Open Courses List'}
        />

        <Card>
          <CardItem>
            <PageTitle style={ styles.feedbacksTitle }>Recensioni</PageTitle>
          </CardItem>


          {feedbacksLoading
              ? <ActivityIndicator size={'large'} color={'green'} />
              : [
                (feedbacks.length
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
              ]
          }

        </Card>

      </View>
  );

}

export default GymPage;

const styles = {
  feedbacksTitle: {
    fontSize: 16,
    textTransform:'capitalize'
  }
};
