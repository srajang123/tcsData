import React,{Component} from 'react';
import FormData from './FormData';
import Confirm from './Confirm';
export default class Form extends Component{
    constructor(props)
    {
        super(props);
        this.state={
                fname:'',
                lname:'',
                Fname:'',
                Mname:'',
                city:'',
                role:'',
                email:'',
                contact:'',
            level:1
        }
    }
    handleChange=input=>e=>{
        this.setState({[input]:e.target.value});
    }
    incLevel=()=>{
        const {level}=this.state;
        this.setState({
            level:level+1
        });
    }
    decLevel=()=>{
        const {level}=this.state;
        this.setState({
            level:level-1
        });
    }
    addData=()=>{
        this.incLevel();
        const {data}=this.state;
        console.log(data);
    }
    SubmitForm=()=>{
        this.incLevel();
        const {data}=this.state;
        console.log(data);
        //submit to server
    }
    render=()=>{
        const {level}=this.state;
        switch(level)
        {
            case 1: return (<FormData data={this.state} add={this.addData} change={this.handleChange}/>);
            case 2: return  (<Confirm data={this.state} submit={this.SubmitForm} back={this.decLevel}/>);
            default:console.log('Hello');
        }
        return (<h1>Success</h1>)
    }
}