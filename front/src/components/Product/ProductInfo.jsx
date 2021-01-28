import Axios from 'axios'
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {oneProduct} from '../../store/actions/productAction'
import {addProductToCart} from "../../store/actions/basketAction"

class ProductInfo extends Component {
    componentDidMount(){
        Axios.get(`http://localhost:8080/product/${this.props.product.id_produit}`).then((result) => {
            this.props.oneProduct(result.data[0])
        })
    }
    render(){
        return(
            <div>
                <img src={this.props.product.image} alt={this.props.product.description}/>
                <p>{this.props.product.description}</p>
                <p>Prix : {this.props.product.prix_ttc} €</p>
                <button onClick={() => {
                    this.props.addProductToCart(this.props.product)}
                    }
                >Ajouter</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    product : state.productReducer.product
})

const mapDispatchToProps = {
    oneProduct,
    addProductToCart
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductInfo)