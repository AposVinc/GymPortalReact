import React from 'react';
import {Text, View} from 'react-native';
import Card from '../components/Card';
import {
  CardItem,
  ListButton,
  PageTitle,
} from '../components';
import {sGymLoadedGyms} from '../reducers/GymReducer';
import {courseFetch} from '../actions';
import {useDispatch, useSelector} from 'react-redux';


function GymPage({ route, navigation }) {
  const { itemId } = route.params;
  const gym = useSelector(sGymLoadedGyms).find( (el) => el.id === itemId);
  const dispatch = useDispatch();

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
              dispatch(courseFetch(gym.id));
              navigation.navigate('Courses List', {itemId}); }
            }
            text={'Open Courses List'}
        />

      </View>
  );

}

export default GymPage;
