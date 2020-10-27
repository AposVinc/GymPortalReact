import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
  Card,
  CardItem,
  Input,
  InputLabel,
  ListButton,
  PageTitle,
} from '../components';
import {sUserLoading, sUserProps} from '../reducers/UserReducer';
import {
  userFormChangeEmail, userFormChangeLastname,
  userFormChangeName, userFormChangePassword,
  userFormChangeUsername, userUpdate,
} from '../actions';


export default function() {
  const user = useSelector(sUserProps);
  const loading = useSelector(sUserLoading);
  const dispatch = useDispatch();

  return (
      <View style={styles.container}>

        <Card>
          <CardItem>
            <PageTitle>SignUp</PageTitle>
          </CardItem>

          <CardItem noMarginButton propStyle={{flexDirection: "row", paddingHorizontal: 0}}>

            <CardItem noMarginButton propStyle={{flex: 1, flexDirection: "column", paddingHorizontal: 0}}>
              <CardItem noMarginButton>
                <InputLabel text={'Name'} />
              </CardItem>
              <CardItem >
                <Input
                    placeholder={'name'}
                    handleChangeText={(value) => dispatch(userFormChangeName(value))}
                    value={user.name}
                />
              </CardItem>
            </CardItem>

            <CardItem noMarginButton propStyle={{flex: 1, flexDirection: "column", paddingHorizontal: 0}}>
              <CardItem noMarginButton>
                <InputLabel text={'Lastname'} />
              </CardItem>
              <CardItem >
                <Input
                    placeholder={'lastname'}
                    handleChangeText={(value) => dispatch(userFormChangeLastname(value))}
                    value={user.lastname}
                />
              </CardItem>
            </CardItem>

          </CardItem>

          <CardItem noMarginButton>
            <InputLabel text={'Email'} />
          </CardItem>
          <CardItem>
            <Input
                placeholder={'email'}
                handleChangeText={(value) => dispatch(userFormChangeEmail(value))}
                value={user.email}
            />
          </CardItem>

          <CardItem noMarginButton>
            <InputLabel text={'Username'} />
          </CardItem>
          <CardItem>
            <Input
                placeholder={'username'}
                handleChangeText={(value) => dispatch(userFormChangeUsername(value))}
                value={user.username}
            />
          </CardItem>

          <CardItem noMarginButton>
            <InputLabel text={'Password'} />
          </CardItem>
          <CardItem>
            <Input
                placeholder={'password'}
                handleChangeText={(value) => dispatch(userFormChangePassword(value))}
                value={user.password}
                secureTextEntry
            />
          </CardItem>

          <CardItem>
            <ListButton
                onPress={ () => dispatch(userUpdate()) }
                inLoading={ loading }
                text={'Edit'}
            />
          </CardItem>
        </Card>


      </View>
  );

};

const styles = {
  container: {
    flex: 1,
    paddingVertical: 15,
  },
};
