import React,{Component} from 'react';
import {TextField,RaisedButton,AppBar} from 'material-ui';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class FormData extends Component
{
    chk=()=>{
        const {fname,lname,Fname,Mname,city,role,email,contact}=this.props.data;
        const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(fname==='')
            alert('Please Enter First Name');
        else if(lname==='')
            alert('Please Enter Last Name');
        else if(Fname==='')
            alert("Please Enter Father's Name");
        else if(Mname==='')
            alert("Please Enter Mother's Name");
        else if(city==='')
            alert('Please enter city');
        else if(role==='')
            alert('Please enter role');
        else if(email==='')
            alert('Please Enter Email');
        else if(contact==='')
            alert('Please Enter Contact Number');
        else if(isNaN(Number(contact))||contact.length!==10)
            alert('Please Enter Valid Contact Number');
        else if(!email.match(mailformat))
            alert('Please Enter Valid Email');
        else
            this.props.add();
    }
    render=()=>{
    return(
        <MuiThemeProvider>
            <React.Fragment>
                <AppBar title='User Form' showMenuIconButton={false}/>
                <div class="form-data">
                    <TextField hintText='Enter Your First Name' floatingLabelText='First Name' defaultValue={this.props.fname} onChange={this.props.change('fname')}/><br/>
                    <TextField hintText='Enter Your Last Name' floatingLabelText='Last Name' defaultValue={this.props.lname} onChange={this.props.change('lname')}/><br/>
                    <TextField hintText="Enter Your Father's Name" floatingLabelText="Father's Name" defaultValue={this.props.Fname} onChange={this.props.change('Fname')}/><br/>
                    <TextField hintText="Enter Your Mother's Name" floatingLabelText="Mother's Name" defaultValue={this.props.Mname} onChange={this.props.change('Mname')}/><br/>
                    <TextField hintText='Enter Your City' floatingLabelText='City' defaultValue={this.props.city} onChange={this.props.change('city')}/><br/>
                    <TextField hintText='Enter Your Role' floatingLabelText='Role' defaultValue={this.props.role} onChange={this.props.change('role')}/><br/>
                    <TextField hintText='Enter Your Email' floatingLabelText='E-mail' defaultValue={this.props.email} onChange={this.props.change('email')}/><br/>
                    <TextField hintText='Enter Your contact no' floatingLabelText='Contact No' defaultValue={this.props.contact} onChange={this.props.change('contact')}/><br/>
                    <RaisedButton label='Submit' onClick={this.chk} primary={true}/>
                </div>
        </React.Fragment>
        </MuiThemeProvider>
        )
    }
}