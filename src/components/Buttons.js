import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

export const LoginButton = function({onPress, inLoading = false, text = 'Login'}) {
  return (
      <TouchableOpacity
          style={[
            styles.button.container,
            styles.loginButton.container,
          ]}
          onPress={onPress}
      >
        {inLoading &&
        <ActivityIndicator size="small" color="rgb(254, 178, 7)" />}
        {!inLoading && <Text style={[styles.button.text]}>{text}</Text>}
      </TouchableOpacity>
  );
};

export const LinkButton = function({onPress, text}) {
  return (
      <TouchableOpacity
          style={[
            styles.link.container,
          ]}
          onPress={onPress}
      >
        <Text style={[styles.link.text]}>{text}</Text>
      </TouchableOpacity>
  );
};

const styles = {
  link: {
    container: {
      height: 40,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    text: {
      fontSize: 14,
      fontWeight: '900',
      color: 'black',
    }
  },
  button: {
    container: {
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 14,
      fontWeight: '900',
      textTransform: 'uppercase',
      color: 'white',
    },
  },
  loginButton: {
    container: {
      backgroundColor: 'rgb(120, 79,246)',
    },
  },
};
