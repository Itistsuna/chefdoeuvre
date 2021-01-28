import React , {Component} from 'react'
import { connect } from 'react-redux'
import {deleteProductFromCart,resetCart,decreaseCounter,increaseCounter} from '../../store/actions/basketAction'

class CartComponent extends Component {
    render(){
        return(
            <div>
                {this.props.basket !== null && this.props.basket.map((elem, index) => {
                    return (
                        <div key={index}>
                            <p>Name : {elem.name}</p>
                            <img src={elem.image} alt={elem.description}/>
                            <p>Quantité : {elem.quantity ? elem.quantity : 1}</p>
                            <p>Prix : {elem.quantity ? elem.quantity * elem.prix_ttc : elem.prix_ttc} €</p>
                            <button onClick={()=>{this.props.decreaseCounter(elem)}}>-</button>
                            <button onClick={()=>{this.props.increaseCounter(elem)}}>+</button>
                            <button onClick={()=>{this.props.deleteProductFromCart(elem)}}>supprimer le produit</button>
                        </div>
                    )
                })}
                Total: {this.props.total} €
                <button>Valider</button>
                <button onClick={() => {this.props.resetCart()}}>Reset</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteProductFromCart,
    increaseCounter,
    decreaseCounter,
    resetCart
}

const mapStateToProps = (state) => ({
    basket : state.basketReducer.productBasket,
    total : state.basketReducer.total
})

export default connect(mapStateToProps,mapDispatchToProps)(CartComponent)