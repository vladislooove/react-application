import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getResourcesList } from '../actions/';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GridList, GridTile, Subheader, RaisedButton } from 'material-ui';

import Layout from '../components/Layout';

class Resources extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (!this.props.resources.list.length) {
            this.props.getResourcesList(this.props.resources.page);
        } 
    }

    render() {
        return (
            <Layout pageTitle='Resources list'>
                <GridList
                    cellHeight={180}
                    cols={3}
                    style={{margin: '0 0 20px'}}>
                    <Subheader>Resources</Subheader>
                    
                    {this.props.resources.list.map((resource) => {console.log(resource)})}
                </GridList>
                <RaisedButton 
                    label="Load more" 
                    secondary={true} 
                    onClick={this.loadMoreUsers}
                    style={{margin: '0 2px', display: 'block'}}
                    />
            </Layout>
        )
    }
}

const mapStateToProps = state => {
    return {
        resources: state.resources,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getResourcesList: (page) => {
            dispatch(getResourcesList(page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
