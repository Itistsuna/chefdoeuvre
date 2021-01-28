import './App.css';
import {BrowserRouter as Router , Switch, Route, withRouter, Redirect, } from 'react-router-dom'
import { Component } from 'react';
import DashboardComponent from './components/Dashboard/DashboardComponent'
import SignupComponent from './components/Sign/SignupComponent'
import SigninComponent from './components/Sign/SigninComponent';
import CreateProduct from './components/Product/CreateProduct'
import {connect} from 'react-redux'
import AllProduct from './components/Product/AllProduct';
import ProductInfo from './components/Product/ProductInfo'
import Cart from './components/Cart/Cart';

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/'>
            { this.props.auth ? <Redirect to="dashboard"/> : <SignupComponent/> }
            { this.props.inscription && <Redirect to="sign-in"/>}
          </Route>
          <Route path='/sign-in'>
            { this.props.auth ? <Redirect to="dashboard"/> : <SigninComponent/> }
          </Route>
          <Route path="/dashboard">
            {this.props.auth ? <DashboardComponent/> : <Redirect to="sign-in"/> }
          </Route>
          <Route path="/createproduct">
            {this.props.auth ? <CreateProduct/> : <Redirect to="sign-in"/>}
          </Route>
          <Route path='/product'>
            {this.props.auth ? <AllProduct/> : <Redirect to='sign-in'/>}
          </Route>
          <Route path="/productInfo">
            {this.props.auth ? <ProductInfo/>: <Redirect to="sign-in"/>}
            {this.props.product === null && <Redirect to="product"/>}
          </Route>
          <Route path="/cart">
            {this.props.auth ? <Cart/> : <Redirect to="sign-in"/>}
          </Route>
          <Route >
            {this.props.auth ? <AllProduct/> : <Redirect to='sign-in'/>}
          </Route>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.userReducer.auth,
  inscription: state.userReducer.inscription,
  product: state.productReducer.product
})

export default withRouter(connect(mapStateToProps)(App));
