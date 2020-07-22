import React,{Component} from 'react';
import {TextField,RaisedButton,AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class FormData extends Component
{
    render=()=>{
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title='User Form'/>
                <div class="form-data">
                    <TextField hintText='Enter Your First Name' floatingLabelText='First Name' defaultValue={this.props.fname} onChange={this.props.change('fname')}/><br/>
                    <TextField hintText='Enter Your Last Name' floatingLabelText='Last Name' defaultValue={this.props.lname} onChange={this.props.change('lname')}/><br/>
                    <TextField hintText="Enter Your Father's Name" floatingLabelText="Father's Name" defaultValue={this.props.Fname} onChange={this.props.change('Fname')}/><br/>
                    <TextField hintText="Enter Your Mother's Name" floatingLabelText="Mother's Name" defaultValue={this.props.Mname} onChange={this.props.change('Mname')}/><br/>
                    <TextField hintText='Enter Your City' floatingLabelText='City' defaultValue={this.props.city} onChange={this.props.change('city')}/><br/>
                    <TextField hintText='Enter Your Role' floatingLabelText='Role' defaultValue={this.props.role} onChange={this.props.change('role')}/><br/>
                    <TextField hintText='Enter Your Email' floatingLabelText='E-mail' defaultValue={this.props.email} onChange={this.props.change('email')}/><br/>
                    <TextField hintText='Enter Your contact no' floatingLabelText='Contact No' defaultValue={this.props.contact} onChange={this.props.change('contact')}/><br/>
                    <RaisedButton label='Submit' onClick={this.props.add} primary={true}/>
                </div>
        </React.Fragment>
        </MuiThemeProvider>
        )
    }
}