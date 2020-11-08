import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Card, CardItem, ListButton, PageTitle} from '../components';

function AddFeedbackPage() {

  return (
      <View style={styles.container}>

        <Card>
          <CardItem>

          </CardItem>

        </Card>

        <ListButton
            onPress={ () => {}}
            text={'Add Feedback'}
            style={ styles.button }
        />

      </View>
  );

}

export default AddFeedbackPage;

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 40,
    paddingRight: 40
  },
};
