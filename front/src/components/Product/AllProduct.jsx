import Axios from 'axios'
import React , {Component} from 'react'
import { addProducts, oneProduct } from '../../store/actions/productAction'
import OneProductComponent from './OneProduct'
import {connect} from 'react-redux'
class AllProductComponent extends Component {

    componentDidMount(){
        Axios.get('http://localhost:8080/allProduct').then((result) => {
            console.log(result.data);
            this.props.addProducts(result.data)
        })
    }
    render () {
        return(
            <div>
                {this.props.products !== null && this.props.products.map((element,index) => {
                  return <OneProductComponent products={element} key={index}/>  
                })}
            </div>
        )
    }
}

const mapDispatchToProps = {
    addProducts,
    oneProduct
}

const mapStateToProps = (state) => ({
    products : state.productReducer.products
})

export default connect(mapStateToProps,mapDispatchToProps)(AllProductComponent)