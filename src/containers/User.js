import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logIn } from '../actions/';

import Layout from '../components/Layout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField, RaisedButton } from 'material-ui';

class User extends Component{
    render() {
        return (
            <Layout pageTitle='Users list'>
            </Layout>            
        )
    }
}

export default User;