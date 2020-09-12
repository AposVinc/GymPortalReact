import React from 'react';
import {View} from 'react-native';

export default class CardItem extends React.Component {
  render() {
    const {children, propStyle, noMarginButton} = this.props;
    return (
        <View style={[
          style, propStyle, noMarginButton ? {
            marginBottom: 0,
          } : {},
        ]}>
          {children}
        </View>
    );
  }
}

const style = {
  paddingHorizontal: 12,
  marginBottom: 20,
};
