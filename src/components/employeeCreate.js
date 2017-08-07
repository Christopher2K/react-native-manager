import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import { employeeCreate } from '../actions/EmployeeActions';
import EmployeeForm from './employeeForm';

class EmployeeCreate extends Component {
    onButtonPress() {
        const { name, phone, shift, employeeCreate } = this.props;
        employeeCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />

                <CardSection>
                    <Button onPress={() => this.onButtonPress()}>
                        Save
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return  { name, phone, shift };
};



export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
