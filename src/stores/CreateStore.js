import {createStore, compose} from 'redux';

export default (reducers) => {

  const enhancers = [];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(...enhancers));

  return {store};
}
