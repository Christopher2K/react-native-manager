import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { Text } from 'react-native';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(email) {
        const { emailChanged } = this.props;
        emailChanged(email);
    }

    onPasswordChange(password) {
        const { passwordChanged } = this.props;
        passwordChanged(password);
    }

    onButtonPress() {
        const { email, password, loginUser } = this.props;
        loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }

        return <Button onPress={() => this.onButtonPress()}>Log in</Button>;

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

                <Text style={styles.errorTextStyle}>{this.props.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        color: 'red',
        alignSelf: 'center'
    }
};

const mapStateToProps = ({ auth }) => ({
    email: auth.email,
    password: auth.password,
    error: auth.error,
    loading: auth.loading
});

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
