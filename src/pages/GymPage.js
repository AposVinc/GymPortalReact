import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {
  Card,
  CardItem,
  ListButton,
  PageTitle,
} from '../components';
import FAB from 'react-native-fab'
import FeedbackItem from './partial/FeedbackItem';
import {sGymLoadedGymById, sGymLoading} from '../reducers/GymReducer';
import {sFeedbacksGym, sFeedbackLoading} from '../reducers/FeedbackReducer';
import {feedbacksGymFetch, gymFetch} from '../actions';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {sUserProps} from '../reducers/UserReducer';


function GymPage({ route, navigation }) {
  const { idGym } = route.params;
  const user = useSelector(sUserProps);
  const gym = useSelector(sGymLoadedGymById(idGym));
  const loading = useSelector(sGymLoading);
  const feedbacks = useSelector(sFeedbacksGym);
  const feedbacksLoading = useSelector(sFeedbackLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(gymFetch(idGym));
  }, []);

  useEffect(() => {
    dispatch(feedbacksGymFetch(idGym));
  }, []);

  if (loading || feedbacksLoading) {
    return (
        <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
    );
  }

  return (
      <View style={styles.container}>
        <ScrollView
            refreshControl={ <RefreshControl refreshing={loading && feedbacksLoading} onRefresh={ () => {
              dispatch(gymFetch(idGym));
              dispatch(feedbacksGymFetch(idGym));} } /> }
        >
          <Card  style={styles.containerCard}>

            <CardItem>
              <PageTitle style={ styles.textName }>{gym.name}</PageTitle>
            </CardItem>
            <CardItem >
              <Text style={ styles.textRegion }>
                {gym.address},  {gym.province},  {gym.region}
              </Text>
            </CardItem>

          </Card>

          <ListButton
              onPress={ () => { navigation.navigate('Courses List', {idGym}); } }
              text={'Open Courses List'}
              style={ styles.button }
          />

          <Card style={styles.containerCardFeed}>
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
            onClickAction={() => navigation.navigate('Add Feedback Gym', {idGym})}
            iconTextComponent={
              feedbacks.some(f => f.user === user.id)
                  ? <Icon name='pencil-outline' type='ionicon' />
                  : <Icon name='star-outline' type='ionicon' />
            }
        />

      </View>
  );

}

export default GymPage;

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'#FFFFFF',

  },
  containerCard:{
    backgroundColor: '#e1f5fe',
    width:300,
    marginTop:20,
  },
  containerCardFeed:{
    width:300,
    marginTop:20,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
  feedbacksTitle: {
    fontSize: 18,
    textTransform:'capitalize',
    textAlign: 'center'
  },
  textName: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
  },
  textRegion: {
    textAlign: 'center',
    paddingTop: 20,


  },
};
