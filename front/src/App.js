import './App.css';
import {BrowserRouter as Router , Switch, Route, withRouter, Redirect, } from 'react-router-dom'
import { Component } from 'react';
import DashboardComponent from './components/Dashboard/DashboardComponent'
import SignupComponent from './components/Sign/SignupComponent'
import SigninComponent from './components/Sign/SigninComponent';
import CreateProduct from './components/Product/CreateProduct'
import {connect} from 'react-redux'

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/'>
            { this.props.auth ? <Redirect to="dashboard"/> : <SignupComponent/> }
            { this.props.inscription ? <Redirect to="sign-in"/> : ''}
          </Route>
          <Route path='/sign-in'>
            { this.props.auth ? <Redirect to="dashboard"/> : <SigninComponent/> }
          </Route>
          <Route path="/dashboard">
            {this.props.auth ? <DashboardComponent/> : <Redirect to="sign-in"/> }
          </Route>
          <Route path="/product">
            {this.props.auth ? <CreateProduct/> : <Redirect to="sign-in"/>}
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.userReducer.auth,
  inscription: state.userReducer.inscription
})

export default withRouter(connect(mapStateToProps)(App));
