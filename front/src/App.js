import './App.css';
import {BrowserRouter as Router , Switch, Route, Redirect, withRouter} from 'react-router-dom'
import { Component } from 'react';
import ReactDOM from "react-dom";
import { debugContextDevtool } from 'react-context-devtool';
import DashboardComponent from './components/DashboardComponent'
import SignupComponent from './components/SignupComponent'
import SigninComponent from './components/SigninComponent';
import {connect, Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './store/reducer/index'

class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/'>
            {this.props.auth === true ? (<Redirect to="/dashboard"/>) : (<SignupComponent/>)}
          </Route>
          <Route path='/sign-in'>
            {this.props.auth === true ? (<Redirect to='/dashboard'/>) : (<SigninComponent/>)}
          </Route>
          <Route path='/dashboard'>
            {this.props.auth === false ? (<Redirect to="/sign-in"/>) : (<DashboardComponent/>)}
          </Route>
        </Switch>
      </Router>
    )
  }
}

const container = document.getElementById("root");
debugContextDevtool(container);
const store = createStore(reducer)

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, container);


const mapStateToProps = (state) => ({
  auth: this.userReducer.auth
})

export default connect(mapStateToProps)(withRouter(App));
