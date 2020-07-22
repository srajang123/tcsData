import React,{Component} from 'react';
import {AppBar} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import axios from 'axios';
class View extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount()
    {
        let {data}=this.state;
        axios.get('/data')
        .then(res=>{
            data=res;
        })
        //change over
        this.setState({
            data:data
        })
    }
    render=()=>{
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='View Data' showMenuIconButton={false}/>
                    <table border='1'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Father's Name</th>
                                <th>Mother's Name</th>
                                <th>City</th>
                                <th>Role</th>
                                <th>E-mail</th>
                                <th>Contact Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((el,idx)=>(
                                <tr>
                                    <td>{idx+1}</td>
                                    <td>{el.fname}</td>
                                    <td>{el.lname}</td>
                                    <td>{el.Fname}</td>
                                    <td>{el.Mname}</td>
                                    <td>{el.city}</td>
                                    <td>{el.role}</td>
                                    <td>{el.email}</td>
                                    <td>{el.contact}</td>
                                </tr>
                                
                            ))}
                        </tbody>
                    </table>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default View;