import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'redux'

class DashboardComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            test: 1
        }
    }
    render(){
        return(
            <div>
              test  
            </div>
        )   
    }
    
}

export default DashboardComponent