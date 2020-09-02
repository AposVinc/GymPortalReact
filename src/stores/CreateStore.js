import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

export default (reducers) => {

  const middleware = [thunk];
  const enhancers = [applyMiddleware(...middleware)];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducers, composeEnhancers(...enhancers));

  return {store};
}
