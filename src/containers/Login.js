import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField, RaisedButton } from 'material-ui';


class Login extends Component {
    constructor(props) {
        super(props);
        this.formData = {
            email: null,
            password: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.logIn(
            this.formData.email,
            this.formData.password
        ); 
        this.props.history.push(`/`)
    }

    render() {
        return (
            <MuiThemeProvider>
                <Paper style={{width: 600, marginLeft: 'auto', marginRight: 'auto', marginTop: '100px', padding: '20px'}}>
                    <form onSubmit={this.handleSubmit}>
                        <TextField
                            hintText="peter@klaven"
                            floatingLabelText="Email"
                            type="email"
                            style={{width: '100%'}}
                            required
                            onChange={(event, value) => { this.formData.email = value }}
                        />
                        <TextField
                            hintText="cityslicka"
                            floatingLabelText="Password"
                            type="password"
                            style={{ width: '100%', marginBottom: '20px' }}
                            required
                            onChange={(event, value) => { this.formData.password = value }}
                        />
                        <RaisedButton 
                            label="Submit"
                            primary
                            fullWidth={true}
                            type="submit"
                        />
                    </form>
                </Paper>
            </MuiThemeProvider>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logIn: (email, password) => {
            dispatch(logIn(email, password))
        }
    }
}


export default connect(null, mapDispatchToProps)(Login);
