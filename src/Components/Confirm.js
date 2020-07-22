import React,{Component} from 'react';
import {AppBar,RaisedButton} from 'material-ui';
import {List,ListItem} from 'material-ui/List';
import {MuiThemeProvider} from 'material-ui/styles';
export default class Confirm extends Component
{
    
    render=()=>{
        const {data,submit,back}=this.props;
    return(
        <MuiThemeProvider>
            <React.Fragment>
                    <AppBar title='Confirm User Details' showMenuIconButton={false}/>
                    <div class="form-data">
                        <List>
                            <ListItem primaryText='First Name' secondaryText={data.fname}/>
                            <ListItem primaryText='Last Name' secondaryText={data.lname}/>
                            <ListItem primaryText="Father's Name" secondaryText={data.Fname}/>
                            <ListItem primaryText="Mother's Name" secondaryText={data.Mname}/>
                            <ListItem primaryText='City' secondaryText={data.city}/>
                            <ListItem primaryText='Role' secondaryText={data.role}/>
                            <ListItem primaryText='E-mail' secondaryText={data.email}/>
                            <ListItem primaryText='Contact' secondaryText={data.contact}/>
                        </List>
                        <RaisedButton label='Final Submit' onClick={submit}primary={true}/><br/><br/>
                        <RaisedButton label='Edit Data' onClick={back}primary={true}/>
                    </div>
            </React.Fragment>
        </MuiThemeProvider>
        )
    }
}