import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

import Home from './Home';
import Login from './Login';
import Users from './Users';
import User from './User';
import Resources from './Resources';

class AppComponent extends Component{
    render(){
        if(this.props.isLoading) {
            return (
                <MuiThemeProvider>
                    <div style={{ position: 'fixed', zIndex: 1000, top: 0, left: 0, backgroundColor: '#fff', display: 'flex', width: '100vw', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
                        <CircularProgress size={80} thickness={5} />
                    </div>
                </MuiThemeProvider>
            )
        } else {
            return (
                <Switch>
                    <Route exact path='/' render={() => (
                        this.props.isLoginned.token ? (
                            <Home />
                        ) : (
                                <Redirect to="/login" />
                            )
                    )}
                    />
                    
                    <Route exact path='/users' render={() => (
                        this.props.isLoginned.token ? (
                            <Users />
                        ) : (
                            <Redirect to="/login" />
                        )
                    )} />


                    <Route path='/users/:id' component={User} />

                    <Route exact path='/resources' render={() => (
                        this.props.isLoginned.token ? (
                            <Resources />
                        ) : (
                            <Redirect to="/login" />
                        )
                    )} />
                    
                    <Route path='/login' component={Login} />
                </Switch>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoginned: state.auth,
        isLoading: state.loading
    }
}

export default withRouter(connect(
    mapStateToProps,
    null
)(AppComponent));
