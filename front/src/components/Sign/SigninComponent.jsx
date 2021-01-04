import React, { Component } from "react";
import Input from '../Form/Input'
import {connect} from 'react-redux'
import axios from "axios";
import {setToken, authTrue} from '../../store/actions/userAction'
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

    signIn(){        
        let userObject = {
            password: this.state.password,
            email: this.state.mail   
        }
        axios.post('http://localhost:8080/sign-in',userObject).then((result) =>{
          if(result.data.auth === true) {
              this.props.setToken(result.data.token)
              this.props.authTrue()
              this.props.history.push('/dashboard')
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
                {form.map((elem)=>{
                    return <Input form={elem} key={elem.id}/>
                })}
                <button onClick={this.signIn}>Log in</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token : state.userReducer.token,
    auth: state.userReducer.auth
})

const mapDispatchToProps = {
    setToken,
    authTrue
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInComponent)