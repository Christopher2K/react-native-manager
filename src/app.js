import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/loginForm';

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
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;