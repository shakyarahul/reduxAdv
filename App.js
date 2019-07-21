/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{Fragment} from 'react';
import { Provider } from 'react-redux';
import { createStore ,applyMiddleware} from 'redux';
import rootReducer from './src/redux/reducers';
import Home from './src/components/Home';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  );
};

export default App;
