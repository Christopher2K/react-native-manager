import * as _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions/EmployeeActions';
import ListItem  from './listItem';

class EmployeeList extends Component {
    componentWillMount() {
        const { employeesFetch } = this.props;
        employeesFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    renderRow (employee) {
        return <ListItem employee={employee} />;
    }

    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    employees: _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    })
});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
