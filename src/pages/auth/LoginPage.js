import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';

import {
  PageTitle,
  Card,
  CardItem,
  InputLabel,
  Input,
  LoginButton,LinkButton,
} from '../../components';
import {
  appSignIn,
  appGuestFormChangeUsername,
  appGuestFormChangePassword,
} from '../../actions';
import {
  sAppGuestFormUsername,
  sAppGuestFormPassword,
  sAppLoading,
} from '../../reducers/selectors';


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
              <InputLabel text={'Username'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'username'}
                  handleChangeText={this.props.handleChangeUsername}
                  value={this.props.username}
              />
            </CardItem>
            <CardItem noMarginButton>
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
    username: sAppGuestFormUsername(state),
    password: sAppGuestFormPassword(state),
    loading: sAppLoading(state),
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
    singIn: function() {
      dispatch(appSignIn());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
