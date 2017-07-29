import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(email) {
        const { emailChanged } = this.props;
        emailChanged(email);
    }

    onPasswordChange(password) {
        const { passwordChanged } = this.props;
        passwordChanged(password);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Email" 
                        placeholder="email@provider.com"
                        onChangeText={(email) => this.onEmailChange(email)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        placeholder="password"
                        secureTextEntry
                        onChangeText={(password) => this.onPasswordChange(password)}
                        value={this.props.password}
                    />
                </CardSection>

                <CardSection>
                    <Button>Log in</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => ({
    email: state.auth.email,
    password: state.auth.password
});

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
