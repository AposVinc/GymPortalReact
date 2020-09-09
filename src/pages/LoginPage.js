import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

import {
  PageTitle,
  Card,
  CardItem,
  InputLabel,
  Input,
  LoginButton,LinkButton,
} from '../components';
import {
  appSignIn,
  appGuestFormChangeEmail,
  appGuestFormChangePassword,
} from '../actions';
import {
  sAppGuestFormEmail,
  sAppGuestFormPassword,
  sAppGuestSingUpLoading,
} from '../reducers/selectors';


class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.goToSignUp = function () {
      this.props.navigation.navigate('SignUp');
    }.bind(this);

  }

  render() {
    return (
        <View style={styles.pageContainer}>
          <Card>
            <CardItem>
              <PageTitle>Login</PageTitle>
            </CardItem>
            <CardItem propStyle={{marginBottom: 0}}>
              <InputLabel text={'Email'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'mario.rossi@gmail.com'}
                  handleChangeText={this.props.handleChangeEmail}
                  value={this.props.email}
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
                  onPress={this.props.singIn}
                  inLoading={this.props.loading}
              />
            </CardItem>
            <CardItem>
              <LinkButton text={'GO TO SignUpPage'} onPress={this.goToSignUp} />
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
    email: sAppGuestFormEmail(state),
    password: sAppGuestFormPassword(state),
    loading: sAppGuestSingUpLoading(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleChangeEmail: function(value) {
      dispatch(appGuestFormChangeEmail(value));
    },
    handleChangePassword: function(value) {
      dispatch(appGuestFormChangePassword(value));
    },
    singIn: function() {
      dispatch(appSignIn());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
