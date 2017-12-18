import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser, deleteUser } from '../actions/';

import Layout from '../components/Layout';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Paper, 
        TextField, 
        RaisedButton, 
        Tabs, 
        Tab, 
        Card, 
        CardHeader, 
        CardTitle, 
        CardText,
        Dialog,
        FlatButton } from 'material-ui';

class User extends Component{
    constructor(props) {
        super(props);
        this.state = {
            dialog: {
                open: false
            }
        }

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    componentWillMount() {
        if(this.props.user.id != this.props.match.params.id) {
            this.props.getUser(this.props.match.params.id)
        }
    }

    handleOpen() {
        this.setState({dialog: {open: true}});
    }
    
    handleClose() {
        this.setState({dialog: {open: false}});
    }
    
    deleteUser() {
        this.props.deleteUser(this.props.user.id);
        this.handleClose();
    }

    render() {
        const dialogActions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.deleteUser}
            />,
            <FlatButton
                label="Delete"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleClose}
            />,
        ];
      
        return (
            <Layout pageTitle={`${this.props.user.first_name} ${this.props.user.last_name}`}>
                <Tabs>
                    <Tab label="Info" >
                        <div style={{ padding: '20px' }}>
                            <Card>
                                <CardHeader
                                    title={this.props.user.first_name}
                                    subtitle={this.props.user.last_name}
                                    avatar={this.props.user.avatar}
                                />
                                <CardTitle title="About user" subtitle="In few words" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>
                            </Card>
                        </div>
                    </Tab>
                    <Tab label="Update" >
                        <div style={{ padding: '20px' }}>
                            asd
                        </div>
                    </Tab>
                    <Tab label="Delete" >
                        <div style={{ padding: '20px' }}>
                        <RaisedButton
                            label="DELETE"
                            secondary
                            fullWidth
                            onClick={this.handleOpen}
                            />
                        <Dialog
                            title="Are you shure?"
                            actions={dialogActions}
                            modal={false}
                            open={this.state.dialog.open}
                            onRequestClose={this.handleClose}
                        >
                            This action is permanently, so think twice do yo really need id.
                        </Dialog>

                        </div>
                    </Tab>
                </Tabs>
            </Layout>            
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: (id) => {
            dispatch(getUser(id))
        },
        deleteUser: (id) => {
            dispatch(deleteUser(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);
