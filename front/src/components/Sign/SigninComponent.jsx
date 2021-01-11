import React, { Component } from "react";
import Input from '../Form/Input'
import {connect} from 'react-redux'
import axios from "axios";
import {setToken, authTrue, inscriptionDone} from '../../store/actions/userAction'
import NavSign from "./navSign";
import Waves from '../Animation/Wawes'
class SignInComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            mail: '',
            password: ""
        }
        this.handleMail = this.handleMail.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.signIn = this.signIn.bind(this)
    }
    componentDidMount(){
        if(this.props.inscription){
            this.props.inscriptionDone() 
        }
    }
    handleMail(event){
        this.setState({
            mail: event.target.value
        })
    }
    handlePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    signIn(e){     
        e.preventDefault()   
        let userObject = {
            password: this.state.password,
            email: this.state.mail   
        }
        axios.post('http://localhost:8080/sign-in',userObject).then((result) =>{
          if(result.data.auth === true) {
              this.props.setToken(result.data.token)
              this.props.authTrue()
          }
        })
    }

    render(){
        const form = [
            {
                type: 'mail',
                name: 'mail',
                value: this.state.mail,
                onChange: this.handleMail,
                label: 'Mail',
                id: 1
            },
            {
                type: 'password',
                name: 'password',
                value: this.state.password,
                onChange: this.handlePassword,
                label: 'Mot de passe',
                id: 2
            }
        ]
        return(
            <div>
            <Waves/>
            <NavSign/>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
            </style> 
            <form className="wrapper">
            {
              form.map((elem)=>{
                  return <Input form={elem} key={elem.id}/>
              })
            } 
            <button onClick={this.signIn}>
              Sign In
            </button>    
            </form>
          
          
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token : state.userReducer.token,
    auth: state.userReducer.auth,
    inscription: state.userReducer.inscription
})

const mapDispatchToProps = {
    inscriptionDone,
    setToken,
    authTrue
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent)