import React from 'react';
import {SafeAreaView} from 'react-native';
import GymListPage from './pages/GymListPage.js';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      defaultValueText: 'Ciao',
      valueText: '',
    };
  }

  render() {
    return (
        <SafeAreaView style={styles.container} >
          <GymListPage />
        </SafeAreaView>
    );
  }

}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'rgb(233,233,233)'
  }
};

export default App;
