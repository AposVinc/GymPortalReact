import React, {useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {
  Card,
  CardItem,
  ListButton,
  PageTitle,
} from '../../components';
import FAB from 'react-native-fab'
import FeedbackItem from './partial/FeedbackItem';
import {sGymLoadedGyms} from '../../reducers/GymReducer';
import {sFeedbackList, sFeedbackLoading} from '../../reducers/FeedbackReducer';
import {feedbacksGymFetch} from '../../actions';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';


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
            style={ styles.button }
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
                        : ( <CardItem>
                              <Text> There Isn't Feedbacks</Text>
                            </CardItem>)
                )
              ]
          }

        </Card>

        {/*se utente ha gia fatto recensione feedbacks.some(f => f.user === user.id) allora cambia fab e permetti modifica*/}
        <FAB
            buttonColor='rgb(254, 178, 7)'
            iconTextColor="#fff"
            onClickAction={() => navigation.navigate('Feedback')}
            iconTextComponent={<Icon name='star-outline' type='ionicon' />}
        />

      </View>
  );

}

export default GymPage;

const styles = {
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
