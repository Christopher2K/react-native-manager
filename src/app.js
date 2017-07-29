import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import Firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/loginForm';

function configureStore() {
  const store = createStore(reducers);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

class App extends Component {

    componentWillMount() {
        // Firebse init
        Firebase.initializeApp({
            apiKey: 'AIzaSyCUAj-ojtaarJksfg5fbLfF67vNHxXArdo',
            authDomain: 'manager-react-native-8ac9b.firebaseapp.com',
            databaseURL: 'https://manager-react-native-8ac9b.firebaseio.com',
            projectId: 'manager-react-native-8ac9b',
            storageBucket: 'manager-react-native-8ac9b.appspot.com',
            messagingSenderId: '1004079042689'
        });
    }

    render() {
        return (
            <Provider store={configureStore()}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;