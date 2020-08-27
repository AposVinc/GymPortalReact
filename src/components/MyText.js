import React from 'react';
import {Text} from 'react-native';

class MyText extends React.Component {
  render() {
    const {text = 'Hello World', yesorno = false} = this.props;
    const newtext = (yesorno && text) ? text : 'No Text';
    return (
        <Text style={[style, this.props.style]}>{newtext}</Text>
    );
  }
}

const style = {
  fontSize: 20,
  fontWeight: 'bold',
};

export default MyText;
