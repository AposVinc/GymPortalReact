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


const INITIAL_STATE = {
  email: '',
  password: '',
  loading: false,
  error: '',
};


class SignUpPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = INITIAL_STATE;
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeAttributes = this.handleChangeAttributes.bind(this);
    this.handlePress = this.handlePress.bind(this);
    this.onSignUpSuccess = this.onSignUpSuccess.bind(this);
    this.onSignUpFailure = this.onSignUpFailure.bind(this);

    this.goToSignIn = function() {
      this.props.navigation.navigate('SignIn');
    }.bind(this);

  }

  handleChangeEmail(value) {
    this.setState({
      email: value,
    });
  }

  handleChangePassword(value) {
    this.setState({
      password: value,
    });
  }

  handleChangeAttributes(name, value) {
    this.setState({
      [name]: value,
    });
  }

  onSignUpSuccess() {
    this.setState(INITIAL_STATE);
  }

  onSignUpFailure(error) {
    this.setState({
      loading: false,
      error,
    });
  }

  handlePress() {
    this.setState({
      loading: true,
    });

    firebase.auth().
        createUserWithEmailAndPassword(this.state.email, this.state.password).
        then(this.onSignUpSuccess).
        catch((error) => {
          // Handle Errors here.
          console.log(error.code, error.message);
          this.onSignUpFailure(error.message);
        });
  }

  render() {
    const {goToSignIn} = this.props;
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
                  handleChangeText={this.handleChangeEmail}
              />
            </CardItem>
            <CardItem noMargin>
              <InputLabel text={'Password'} />
            </CardItem>
            <CardItem>
              <Input
                  placeholder={'password'}
                  handleChangeText={this.handleChangePassword}
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

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(null, mapDispatchToProps)(SignUpPage);
