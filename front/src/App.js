import './App.css';
import {BrowserRouter as Router , Switch, Route, Redirect} from 'react-router-dom'
import { Component } from 'react';
import DashboardComponent from './components/DashboardComponent'
import SignupComponent from './components/SignupComponent'
class App extends Component{
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path='/'>
            {this.props.auth === false ? <SignupComponent/> : <DashboardComponent/>}
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;
