import React, {Component} from 'react'

class Input extends Component {
    render(){
        return(
            <div className="input">
                <label>{this.props.form.label}</label> 
                <br/>
                <input 
                    type={this.props.form.type}
                    name={this.props.form.name}
                    value={this.props.form.value}
                    onChange={this.props.form.onChange}
                    required
                />
            </div>
            
        )
    }
}

export default Input