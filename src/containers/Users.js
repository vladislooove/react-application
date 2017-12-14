import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersList } from '../actions/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField, RaisedButton } from 'material-ui';

import Layout from '../components/Layout';

class Users extends Component {
    constructor(props) {
        super(props);
        this.loadMoreUsers = this.loadMoreUsers.bind(this);
    }

    loadMoreUsers(){
        this.props.getUsersList(this.props.users.page);
    }
    
    componentDidMount() {
        if (!this.props.users.list.length) {
            this.props.getUsersList(this.props.users.page);
        } 
    }
    
    render() {
        return (
            <Layout pageTitle='Users list'>
                {this.props.users.list.map((user) => {
                    return (
                        <h1 key={user.id}>{user.name}</h1>
                    )
                })}
                <div onClick={this.loadMoreUsers}>
                    load
                </div>
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        users: state.users,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsersList: (page) => {
            dispatch(getUsersList(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);
