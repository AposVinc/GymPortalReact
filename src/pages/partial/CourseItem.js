import React, {Component} from 'react';
import {Text, View, Linking, Button, TouchableOpacity} from 'react-native';

import {CardItem, FavoriteButton} from '../../components';

export default class CourseItem extends Component {

  constructor(props) {
    super(props);
    this.handleFavoriteButtonPress = this.handleFavoriteButtonPress.bind(this);
  }

  handleFavoriteButtonPress() {
    const {course: {id}} = this.props;
    const url = id;
    Linking.openURL(url).
        catch((err) => console.error('An error occurred', err));
  }

  render() {
    const {course: {id, name, code, description}} = this.props;
    return (
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Course', { itemId: id})}>
          <CardItem>
            <View style={styles.container}>
              <View style={styles.containerText}>
                <Text>Name: {name}</Text>
                <Text>Code: {code}</Text>
                <Text>Description: {description}</Text>
              </View>
              <View style={{justifyContent: 'center'}}>
                <FavoriteButton
                    onPress={this.handleFavoriteButtonPress}
                    favorite={true}
                    style={styles.button}
                />
              </View>
            </View>
          </CardItem>
        </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    width:'100%',
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
    width: 50,
  },
};
