import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUsersList } from '../actions/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, TextField, RaisedButton } from 'material-ui';

import Layout from '../components/Layout';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1
        }

        this.loadMoreUsers = this.loadMoreUsers.bind(this);
    }

    loadMoreUsers(){
        this.props.getUsersList(this.state.page);

        const nextPage = this.state.page + 1;

        this.setState({
            page: nextPage
        })
        console.log(this.state)
        console.log(nextPage)
    }
    
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.getUsersList(this.state.page);

            this.setState({
                page: (this.state.page + 1)
            })
        } 
    }
    
    render() {
        return (
            <Layout pageTitle='Users list'>
                {this.props.users.map((user) => {
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
