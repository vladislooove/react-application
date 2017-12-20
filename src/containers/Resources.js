import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { getResourcesList } from '../actions/';

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
                    
                    {this.props.resources.list.map((resource) => (
                        <Link to={`/`} 
                                style={{ textDecoration: 'none' }}
                                key={resource.id}>  
                            <GridTile
                                title={resource.name}
                                subtitle={resource.pantone_value}
                            >
                                <div style={{
                                    backgroundColor: resource.color,
                                    height: '180px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {resource.year}
                                </div>
                            </GridTile>
                        </Link>
                    ))}
                </GridList>
                <RaisedButton 
                    label="Load more" 
                    secondary={true} 
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
