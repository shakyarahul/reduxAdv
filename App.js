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
import {Home,Dashboard,UserView,EditUserView} from './src/screen';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './src/redux/sagas';
import { Router,Stack,Scene } from 'react-native-router-flux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga); 

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Scene key="root">
          <Scene key="login" component={Home} initial={true} title="Login"/>
          <Scene key="dashboard" component={Dashboard} title="Dashboard"/>
          <Scene key="userview" component={UserView} title="User Info"/>
          <Scene key="edituserview" component={EditUserView} title="Edit Info"/>
        </Scene>
      </Router>
    </Provider>
  );
};

export default App;
