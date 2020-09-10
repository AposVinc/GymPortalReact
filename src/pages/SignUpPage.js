import React from 'react';
import {View, Text} from 'react-native';

import {
  PageTitle,
  Card,
  CardItem,
  InputLabel,
  Input,
  LoginButton,
  LinkButton,
} from '../components';
import {connect} from 'react-redux';
import {
  appGuestFormChangeUsername,
  appGuestFormChangePassword,
  appSignUp,
} from '../actions';
import {
  sAppGuestFormUsername,
  sAppGuestFormPassword, sAppGuestSingUpLoading,
} from '../reducers/AppReducer';


class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.goToSignIn = function() {
      this.props.navigation.navigate('SignIn');
    }.bind(this);

  }

  render() {
    return (
        <View style={styles.pageContainer}>
          <Card>
            <CardItem>
              <PageTitle>SignUp</PageTitle>
            </CardItem>
            <CardItem propStyle={{marginBottom: 0}}>
              <InputLabel text={'Username'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'username'}
                  handleChangeText={this.props.handleChangeUsername}
                  value={this.props.username}
              />
            </CardItem>
            <CardItem noMargin>
              <InputLabel text={'Password'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'password'}
                  handleChangeText={this.props.handleChangePassword}
                  value={this.props.password}
                  secureTextEntry
              />
            </CardItem>

            <CardItem>
              <LoginButton
                  onPress={this.props.signUp}
                  inLoading={this.props.loading}
                  text={'Sign Up'}
              />
            </CardItem>
            <CardItem>
              <LinkButton text={'GO TO SignIn'} onPress={this.goToSignIn}/>
            </CardItem>
          </Card>
        </View>
    );
  }
}

const styles = {
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
};


function mapStateToProps(state) {
  return {
    username: sAppGuestFormUsername(state),
    password: sAppGuestFormPassword(state),
    loading: sAppGuestSingUpLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeUsername: function(value) {
      dispatch(appGuestFormChangeUsername(value));
    },
    handleChangePassword: function(value) {
      dispatch(appGuestFormChangePassword(value));
    },
    signUp: function(){
      dispatch(appSignUp());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
