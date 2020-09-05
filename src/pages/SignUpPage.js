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
  appGuestFormChangeEmail,
  appGuestFormChangePassword,
  appGuestFormReset, appSignUp,
} from '../actions';
import {
  sAppGuestFormEmail,
  sAppGuestFormPassword,
} from '../reducers/AppReducer';


class SignUpPage extends React.Component {

  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
    this.onSignUpSuccess = this.onSignUpSuccess.bind(this);
    this.onSignUpFailure = this.onSignUpFailure.bind(this);

    this.goToSignIn = function() {
      this.props.navigation.navigate('SignIn');
    }.bind(this);

  }

  onSignUpSuccess() {
    this.props.resetForm();
  }

  onSignUpFailure(error) {
    this.setState({
      loading: false,
      error,
    });
  }

  render() {
    return (
        <View style={styles.pageContainer}>
          <Card>
            <CardItem>
              <PageTitle>SignUp</PageTitle>
            </CardItem>
            <CardItem propStyle={{marginBottom: 0}}>
              <InputLabel text={'Email'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'mario.rossi@gmail.com'}
                  handleChangeText={this.props.handleChangeEmail}
              />
            </CardItem>
            <CardItem noMargin>
              <InputLabel text={'Password'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'password'}
                  handleChangeText={this.props.handleChangePassword}
                  secureTextEntry
              />
            </CardItem>

            <CardItem>
              <LoginButton
                  onPress={this.props.signUp}
                  // inLoading={this.state.loading}
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
    email: sAppGuestFormEmail(state),
    password: sAppGuestFormPassword(state),
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
    resetForm: function() {
      dispatch(appGuestFormReset());
    },
    signUp: function(){
      dispatch(appSignUp());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
