import React, {Component} from 'react';
import {Text, View, Linking, Button} from 'react-native';

import {CardItem, FavoriteButton} from '../../components';

export default class GymItem extends Component {

  constructor(props) {
    super(props);
    this.handleBuyButtonPress = this.handleBuyButtonPress.bind(this);
  }

  handleBuyButtonPress() {
    const {gym: {id}} = this.props;
    const url = id;
    console.log(id);
    Linking.openURL(url).
        catch((err) => console.error('An error occurred', err));
  }

  render() {
    const {gym: {id, name, address, province, region}} = this.props;
    return (
        <CardItem>
          <View style={styles.container}>
            <View style={styles.containerText}>
              <Text>Name: {name}</Text>
              <Text>Reg: {region}</Text>
              <Text>Prov: {province}</Text>
              <Text>Addr: {address}</Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <Button
                  title="Go to Details"
                  onPress={() => this.props.navigation.navigate('Gym')}
              />
              <FavoriteButton
                  onPress={this.handleBuyButtonPress}
                  favorite={true}
                  style={styles.button}
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
