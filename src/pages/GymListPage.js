import React, {Component} from 'react';
import axios from 'axios';
import {View, Text, ActivityIndicator, ScrollView} from 'react-native';

import GymItem from './partial/GymItem';
import {Card} from '../components';

const URL_GYMS = 'http://10.0.2.2:8080/GymREST/rest/gyms';

export default class gymList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gyms: null,
    };
  }

  componentDidMount() {
    axios.get(URL_GYMS).
        then(response => response.data).
        then(data => { this.setState({gyms: data});}).
        catch(error => {
          console.log(error);
        });
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
                      key={`gym-item-${gym.id}`}
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
