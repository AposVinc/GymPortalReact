import React, {Component} from 'react';
import axios from 'axios';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import GymItem from './partial/GymItem';
import {Card} from '../components';

const URL_gym = 'https://rallycoding.herokuapp.com/api/music_albums';

export default class gymList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gyms: null,
    };
  }

  componentDidMount() {
    axios.get(URL_gym).
        then(response => response.data).
        then(data => { this.setState({gyms: data});}).
        catch(error => {
          console.log(error);
        });
  }

  keyExtractor() {
    return `gym-item-${this.title.replace(/ /g, '-').toLowerCase()}`;
  }

  render() {
    const {gyms} = this.state;
    if (!gyms) {
      return (
          <View
              style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <ActivityIndicator size={'large'} color={'green'} />
          </View>
      );
    }
    if (gyms.length === 0) {
      return <Text>Empty gyms List</Text>;
    }

    return (
        <View style={styles.container}>
          <ScrollView>
            <Card>
              {gyms.map((gym, key) => (
                  <GymItem
                      key={`gym-item-${gym.title.replace(/ /g, '-').toLowerCase()}`}
                      gym={gym}
                  />
              ))}
            </Card>
          </ScrollView>
        </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
