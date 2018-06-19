import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getUsersList } from '../actions/';

import { RaisedButton, GridList, GridTile, Subheader } from 'material-ui';

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
                <GridList
                    cellHeight={180}
                    cols={3}
                    style={{margin: '0 0 20px'}}>
                    <Subheader>Users</Subheader>
                    
                    {this.props.users.list.map((user) => (
                        <Link to={`/users/${user.id}`} 
                              style={{ textDecoration: 'none' }}
                              key={user.id}>  
                            <GridTile
                                title={user.first_name}
                                subtitle={user.last_name}
                            >
                                <img 
                                    src={user.avatar}
                                    alt={user.first_name}
                                />
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
                {
                    this.props.users.page <= this.props.users.totalPages &&

                    <RaisedButton 
                    label="Load more" 
                    secondary={true} 
                    onClick={this.loadMoreUsers}
                    style={{margin: '0 2px', display: 'block'}}
                    />
                }
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
