import React,{Component} from 'react';
import {AppBar} from 'material-ui';
import {Link} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Home extends Component{
    render=()=>{
        return(
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='TCS Task Home' showMenuIconButton={false}/>
                    <div className='home'>
                        <p>Welcome, this Project is created by Srajan Gupta.You have two choices:</p>
                        <ul type="circle">
                            <li><Link to='/form' title='Open Form'>Form</Link></li>
                            <li><Link to='/view' title='Open Data'>View Data</Link></li>
                        </ul>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Home;