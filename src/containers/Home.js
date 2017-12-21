import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import MenuItem from 'material-ui/MenuItem';

export default class Home extends Component{
    render(){
        return(
            <Layout pageTitle='Home'>
                <div style={{padding: '10px'}}>
                    Here some links to navigate.
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <MenuItem 
                            secondaryText="list of users"
                            style={{backgroundColor: '#6a8488', color: '#fff', borderBottom: '1px solid #fff'}}
                        >
                            Users list
                        </MenuItem>
                    </Link>
                    <Link to="/resources" style={{ textDecoration: 'none' }}>
                        <MenuItem 
                            secondaryText="list of resources"
                            style={{backgroundColor: '#6a8488', color: '#fff'}}                        
                        >
                            Resouces list
                        </MenuItem>
                    </Link>
                </div>
            </Layout>
        );
    }
}