import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar
                        title={this.props.pageTitle}
                        onLeftIconButtonClick={this.handleToggle.bind(this)}
                    />
                    <Drawer
                        docked={false}
                        width={400}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({ open })}
                    >
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <MenuItem>Dashboard</MenuItem>
                        </Link>
                        <Link to="/users" style={{ textDecoration: 'none' }}>
                            <MenuItem>Users list</MenuItem>
                        </Link>
                        <Link to="/resources" style={{ textDecoration: 'none' }}>
                            <MenuItem>Resouces list</MenuItem>
                        </Link>
                    </Drawer>

                    {this.props.children}

                </div>
            </MuiThemeProvider>
        )
    }
}
