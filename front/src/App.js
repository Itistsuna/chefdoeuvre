import './App.css';
import {BrowserRouter as Router , Switch, Route, withRouter, } from 'react-router-dom'
import { Component } from 'react';
import DashboardComponent from './components/DashboardComponent'
import SignupComponent from './components/Sign/SignupComponent'
import SigninComponent from './components/Sign/SigninComponent';
import {connect} from 'react-redux'

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          {
            this.props.auth ? (
              <Route path='/dashboard' component={DashboardComponent}/>
            ):(
              <>
                <Route exact path='/' component={SignupComponent}/>
                <Route path='/sign-in' component={SigninComponent}/>
              </>
            )
          } 
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.userReducer.auth
})

export default withRouter(connect(mapStateToProps)(App));
