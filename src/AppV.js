import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import createStore from './stores';

import GymListPage from './pages/GymListPage.js';

const {store} = createStore();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store}>
          <SafeAreaView style={styles.container} >
            <GymListPage />
          </SafeAreaView>
        </Provider>
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
