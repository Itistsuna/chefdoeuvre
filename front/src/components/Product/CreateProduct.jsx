import React , {Component} from 'react'
import Form from "../Form/Input";
import axios from 'axios'
import { connect } from 'react-redux';
class CreateProductComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            name : "",
            description: "",
            prix_ttc: "",
            stock: ""
        }
        this.handleName = this.handleName.bind(this)
        this.handleDescription = this.handleDescription.bind(this)
        this.handlePrix = this.handlePrix.bind(this)
        this.handleStock = this.handleStock.bind(this)
        this.createProduct = this.createProduct.bind(this)
    }
    handleName(event){
        this.setState({
            name: event.target.value
        })
    }
    handleDescription(event){
        this.setState({
            description: event.target.value
        })
    }
    handlePrix(event){
        this.setState({
            prix_ttc: event.target.value
        })
    }
    handleStock(event){
        this.setState({
            stock: event.target.value
        })
    }
    createProduct(e){
        e.preventDefault()
        let product = {
            name: this.state.name,
            description: this.state.description,
            prix_ttc: this.state.prix_ttc,
            stock: this.state.stock
        }
        axios.post('http://localhost:8080/createProduct',product,{
            headers: {
                authorization: 'Bearer ' + this.props.token
            }
        })
    }
    render(){
        const form = [
            {
                type: 'text',
                name: 'name',
                value: this.state.name,
                onChange: this.handleName,
                label: 'Nom :',
                id: 1
            },
            {
                type: 'text',
                name: 'description',
                value: this.state.description,
                onChange: this.handleDescription,
                label: 'Description :',
                id: 2
            },
            {
                type: 'number',
                name: 'prix_ttc',
                value: this.state.prix_ttc,
                onChange: this.handlePrix,
                label: 'Prix ttc :',
                id: 3
            },
            {
                type: 'number',
                name: 'stock',
                value: this.state.stock,
                onChange: this.handleStock,
                label: 'Stock :',
                id: 4
            }
        ]
        return(
            <div>
                <form className='wrapper'>
                    {form.map((elem)=>{
                        return <Form form={elem} key={elem.id} />
                    })}
                    <button onClick={this.createProduct}>
                        Créer le produit
                    </button>  
                </form>
                
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token : state.userReducer.token
})

export default connect(mapStateToProps)(CreateProductComponent)