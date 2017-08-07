import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './employeeForm';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions/EmployeeActions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { phone, shift } = this.props;
        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onDecline() {
        this.setState({ showModal: false });
    }

    onAccept() {
        this.props.employeeDelete({ uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.onTextPress()}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={() => this.onAccept()}
                    onDecline={() => this.onDecline()}>
                    Are you sure you want to delete this ?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);
