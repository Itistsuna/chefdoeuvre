import React , {Component} from 'react'

class NavSign extends Component {
    render(){
        return(
            <div className="navBarSign">
                <a href="/">Sign-up</a>
                <a href="/sign-in">Sign-in</a>
            </div>
        )
    }
}

export default NavSign