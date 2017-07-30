import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please login" />
            </Scene>
            <Scene key="main">
                <Scene key="employeeList" component={EmployeeList} title="Employees" />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;