import React , {Component} from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {
    render(){
        return(
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userReducer.token
})

const mapDispatchToProps = {
    authFalse,
    deleteToken
}

export default connect(mapStateToProps,mapDispatchToProps)(Navbar)