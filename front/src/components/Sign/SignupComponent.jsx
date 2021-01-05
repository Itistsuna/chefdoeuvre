import React, {Component} from 'react'
import axios from 'axios'
import NavSign from "./navSign"
import Input from '../Form/Input'
import Wawes from "../Animation/Wawes"
import '../../scss/signUp.css'
class SignupComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            prenom: '',
            adress: '',
            cp: '',
            city: '',
            mail: '',
            tel: '',
            password: ''
        }
        this.handleName = this.handleName.bind(this)
        this.handlePrenom = this.handlePrenom.bind(this)
        this.handleAdress = this.handleAdress.bind(this)
        this.handleCp = this.handleCp.bind(this)
        this.handleCity = this.handleCity.bind(this)
        this.handleMail = this.handleMail.bind(this)
        this.handleTel = this.handleTel.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.signUp = this.signUp.bind(this)
    }

    handleName(event){
        this.setState({
            name: event.target.value
        })
    }
    handlePrenom(event){
        this.setState({
            prenom: event.target.value
        })
    }
    handleAdress(event){
        this.setState({
            adress: event.target.value
        })
    }
    handleCity(event){
        this.setState({
            city: event.target.value
        })
    }
    handleCp(event){
        this.setState({
            cp: event.target.value
        })
    }
    handleMail(event){
        this.setState({
            mail: event.target.value
        })
    }
    handleTel(event){
        this.setState({
            tel: event.target.value
        })
    }
    handlePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    signUp(e){
        e.preventDefault()
        const userObject = {
            name: this.state.name,
            surname: this.state.prenom,
            adress: this.state.adress,
            codepostal: this.state.cp,
            ville: this.state.city,
            telephone: this.state.tel,
            email: this.state.mail,
            password: this.state.password
        }
        axios.post('http://localhost:8080/sign-up', userObject).then((result) =>
        {console.log('here');
        if(result.data === "Inscription done"){
            console.log("here2");
            this.props.history.push('/sign-in')
        }})
    }
    
    render(){
        const form = [
            {
                type: 'text',
                name: 'nom',
                value: this.state.name,
                onChange: this.handleName,
                label: 'Nom :',
                id: 1
            },
            {
                type: 'text',
                name: 'prenom',
                value: this.state.prenom,
                onChange: this.handlePrenom,
                label: 'Prénom :',
                id: 2
            },
            {
                type: 'text',
                name: 'adress',
                value: this.state.adress,
                onChange: this.handleAdress,
                label: 'Adresse :',
                id: 3
            },
            {
                type: 'number',
                name: 'cp',
                value: this.state.cp,
                onChange: this.handleCp,
                label: 'Code postal :',
                id: 4
            },
            {
                type: 'text',
                name: 'city',
                value: this.state.city,
                onChange: this.handleCity,
                label: 'Ville :',
                id: 5
            },
            {
                type: 'tel',
                name: 'telephone',
                value: this.state.tel,
                onChange: this.handleTel,
                label: 'Numéro de téléphone :',
                id: 6
            },
            {
                type: 'mail',
                name: 'mail',
                value: this.state.mail,
                onChange: this.handleMail,
                label: 'Mail :',
                id: 7
            },
            {
                type: 'password',
                name: 'password',
                value: this.state.password,
                onChange: this.handlePassword,
                label: 'Mot de passe :',
                id: 8
            }
        ]
        return(
            <div>
                <Wawes/>
                <NavSign/>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
                </style> 
                <form className="wrapper" >
                {
                  form.map((elem)=>{
                      return <Input form={elem} key={elem.id}/>
                  })
                } 
                <button onClick={this.signUp}>
                  Sign Up
                </button>    
                </form>
              
              
            </div>
        )   
    }
    
}

export default SignupComponent