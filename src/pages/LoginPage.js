import React from 'react';
import {View, Text} from 'react-native';
import {getModel} from 'react-native-device-info';
import firebase from 'firebase';
import {connect} from 'react-redux';

import {
  PageTitle,
  Card,
  CardItem,
  InputLabel,
  Input,
  LoginButton,
  MyText, LinkButton,
} from '../components';
import {
  appSignIn,
  appGuestChangePage,
  appGuestFormChangeEmail,
  appGuestFormChangePassword, appGuestFormReset,
} from '../actions';
import {sAppGuestFormEmail, sAppGuestFormPassword} from '../reducers/selectors';

// import PageTitle from '../components/PageTitle';
// import Card from '../components/Card';
// import CardItem from '../components/CardItem';

const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
};

class LoginPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
    this.handlePress = this.handlePress.bind(this);

    this.onSignInSuccess = this.onSignInSuccess.bind(this);
    this.onSignInFailure = this.onSignInFailure.bind(this);

    this.props.resetForm();

    this.goToSignUp = function () {
      this.props.navigation.navigate('SignUp');
    }.bind(this);
  }

  onSignInSuccess() {
    this.props.resetForm();
  }

  onSignInFailure(error) {
    this.setState({
      loading: false,
      error,
    });
  }

  handlePress() {
    const {email, password} = this.props;
    this.setState({
      loading: true,
    });

    this.props.firebaseSignIn();

    // firebase.auth().
    //     signInWithEmailAndPassword(email, password).
    //     then(this.onSignInSuccess).
    //     catch((error) => {
    //       // Handle Errors here.
    //       console.log(error.code, error.message);
    //       this.onSignInFailure(error.message);
    //     });
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

            {!!this.state.error && (
                <CardItem
                    noMargin
                >
                  <Text style={{color: 'red'}}>{this.state.error}</Text>
                </CardItem>
            )}

            <CardItem>
              <LoginButton
                  onPress={this.handlePress}
                  inLoading={this.state.loading}
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
    firebaseSignIn() {
      dispatch(appSignIn());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
