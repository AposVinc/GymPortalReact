import React, {Component} from 'react';
import {Text, View, Linking, Image, TouchableOpacity} from 'react-native';

import {ListButton, CardItem} from '../../components';

export default class GymItem extends Component {

  constructor(props) {
    super(props);
    this.handleBuyButtonPress = this.handleBuyButtonPress.bind(this);
    this.state = {
      active: false,
    };
  }

  handleBuyButtonPress() {
    const {gym: {url}} = this.props;
    Linking.openURL(url).
        catch((err) => console.error('An error occurred', err));
  }

  render() {
    const {gym: {title, artist, thumbnail_image, image}} = this.props;
    return (
        <CardItem>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {
              this.setState({active: !this.state.active});
            }}>
              <Image
                  style={this.state.active ? styles.image : styles.thumb}
                  source={{uri: this.state.active ? image : thumbnail_image}}
              />
            </TouchableOpacity>
            <View style={styles.containerText}>
              <Text>{title}</Text>
              <Text>{artist}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <ListButton
                  style={styles.button}
                  text={'Buy'}
                  onPress={this.handleBuyButtonPress}
              />
            </View>
          </View>
        </CardItem>
    );
  }
}

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerText: {
    justifyContent: 'space-around',
  },
  thumb: {
    height: 50,
    width: 50,
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    width: 100,
  },
};
