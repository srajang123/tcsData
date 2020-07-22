import React,{Component} from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Form from './Components/Form';
import Home from './Components/Home';
import View from './Components/View';

class App extends Component
{
    render=()=>
    (
        <Router>
            <Route exact path='/'><Home/></Route>
            <Route path='/form'><Form/></Route>
            <Route path='/view'><View/></Route>
        </Router>
    )
}
export default App;