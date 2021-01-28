import React , { Component } from 'react'
import { connect } from 'react-redux'
import {deleteProductFromCart,resetCart} from '../../store/actions/basketAction'

class BasketComponent extends Component {
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteProductFromCart,
    resetCart
}

const mapStateToProps = (state) => {
    basket : state.basketReducer.productBasket
}

export default connect(mapStateToProps,mapDispatchToProps)(BasketComponent)