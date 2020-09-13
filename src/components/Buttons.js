import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import {Button, Icon} from 'react-native-elements';

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

export const ListButton = function({onPress, text, style}) {
  return (
      <TouchableOpacity
          onPress={onPress}
          style={[styles.button.container, styles.listButton.container, style]}
      >
        <Text style={[styles.button.text, styles.listButton.text]}>
          {text}
        </Text>
      </TouchableOpacity>
  );
};

export const FavoriteButton = function({onPress, favorite, style}) {
  const heart = <Icon name='heart' type='ionicon'  color='red'/>;
  const heart_outline = <Icon name='heart-outline' type='ionicon'/>;

  return (
      <TouchableOpacity onPress={onPress}
                        style={[styles.button.container, styles.listButton.container, style]}>
        {favorite ? heart : heart_outline}
      </TouchableOpacity>
  );
};

const styles = {
  link: {
    container: {
      height: 20,
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
    },
    text: {
      fontSize: 14,
      fontWeight: '900',
      color: 'black',
    },
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
  listButton: {
    container: {
      height: 45,
      backgroundColor: 'rgb(254, 178, 7)',
      borderColor: 'black',
      borderWidth: 1,
      borderStyle: 'solid',
    },
    text: {
      color: 'black',
    },
  },
};
