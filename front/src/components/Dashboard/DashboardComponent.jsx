import Axios from 'axios'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {authFalse, deleteToken} from '../../store/actions/userAction'
import {addProductsOwner} from '../../store/actions/productAction'
class DashboardComponent extends Component{
    constructor(){
        super()        
        this.state = {
            name : "",
            surname: ""
        }
        this.deconnect = this.deconnect.bind(this)
    }
    componentDidMount(){
        Axios.post('http://localhost:8080/token',"body",{headers: {
            authorization: 'Bearer ' + this.props.token
        }}).then((result) => {
            this.setState({
                name: result.data.name,
                surname: result.data.surname
            })
            Axios.get(`http://localhost:8080/products/${result.data.id}`).then((result)=>{
                this.props.addProductsOwner(result.data)
            })
        })
    }
    deconnect(){
        this.props.authFalse()
        this.props.deleteToken()
    }
    render(){
        return(
            <div>
                <nav>
                    
                    <img src="./logo.png" alt="logo"/>
                    <h2>{this.state.name}</h2>
                    <h2>{this.state.surname}</h2>
                    <button onClick={this.deconnect}>Déconnecter</button>
                    {
                        this.props.productsOwner.map((elem, index)=>{
                            return (
                                <div key={index}>
                                    <p>{elem.name}</p>
                                    <img src={elem.image} alt={elem.description}/>
                                    <p>{elem.prix_ttc} €</p>
                                    <a href="/modifyProduct">Modifier</a>
                                </div>
                            )
                        })
                    }
                </nav>
            </div>
        )   
    }
    
}

const mapStateToProps = (state) => ({
    token : state.userReducer.token,
    auth: state.userReducer.auth,
    productsOwner : state.productReducer.productOwner
})

const mapDispatchToProps = {
    authFalse,
    deleteToken,
    addProductsOwner
}


export default connect(mapStateToProps,mapDispatchToProps)(DashboardComponent)
