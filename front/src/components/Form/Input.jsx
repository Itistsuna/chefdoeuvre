import React, {Component} from 'react'

class Input extends Component {
    render(){
        return(
            <div>
                <input 
                    type={this.props.form.type}
                    name={this.props.form.name}
                    value={this.props.form.value}
                    onChange={this.props.form.onChange}
                    required
                />
                <label>{this.props.form.label}</label>  
            </div>
            
        )
    }
}

export default Input