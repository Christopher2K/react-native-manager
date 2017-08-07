import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import EmployeeList from './components/employeeList';
import EmployeeCreate from './components/employeeCreate';
import EmployeeEdit from './components/employeeEdit';

const RouterComponent = () => (
    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene 
                    key="login" 
                    component={LoginForm} 
                    title="Please login" />
            </Scene>
            <Scene key="main">
                <Scene
                    key="employeeList"
                    rightTitle="Add"
                    onRight={() => Actions.employeeCreate()}
                    component={EmployeeList}
                    title="Employees"
                    initial />

                <Scene
                    key="employeeCreate"
                    title="Create Employee"
                    component={EmployeeCreate} />

                <Scene
                    key="employeeEdit"
                    title="Edit Employee"
                    component={EmployeeEdit} />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponent;
