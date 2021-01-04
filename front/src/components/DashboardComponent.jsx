import React, {Component} from 'react'
import { connect } from 'react-redux'
import {authFalse, deleteToken} from '../store/actions/userAction'

class DashboardComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: ""
        }
        this.deconnect = this.deconnect.bind(this)
    }
    deconnect(){
        this.props.authFalse()
        this.props.deleteToken()
        this.props.history.push('/sign-in')
    }
    render(){
        return(
            <div>
              Mon dashboard
              <button onClick={this.deconnect}>Déconnecter</button>
            </div>
        )   
    }
    
}

const mapStateToProps = (state) => ({
    token : state.userReducer.token,
    auth: state.userReducer.auth
})

const mapDispatchToProps = {
    authFalse,
    deleteToken
}


export default connect(mapStateToProps,mapDispatchToProps)(DashboardComponent)
