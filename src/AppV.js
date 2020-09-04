import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import createStore from './stores';

import GymListPage from './pages/GymListPage.js';

const {store, persistor} = createStore();

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <SafeAreaView style={styles.container} >
              <GymListPage />
            </SafeAreaView>
          </PersistGate>
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
