import React , {Component} from 'react'
import {connect} from 'react-redux'
import { oneProduct } from '../../store/actions/productAction'
class OneProductComponent extends Component {
    render(){
        return(
            <div onClick={() => {this.props.oneProduct(this.props.products)}}>
                <img src={this.props.products.image} alt={this.props.products.description}/>
            </div>
        )
    }
}

const mapDispatchToProps = ({
    oneProduct
})

export default connect (null,mapDispatchToProps)(OneProductComponent)