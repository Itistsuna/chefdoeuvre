import React, {Component} from 'react'

class Input extends Component {
    render(){
        return(
            <div className="input-data">
                <input 
                    type={this.props.form.type}
                    name={this.props.form.name}
                    value={this.props.form.value}
                    onChange={this.props.form.onChange}
                    required
                    autoComplete="off"
                />
                <label>{this.props.form.label}</label> 
                <div className="underline"></div>
            </div>
            
        )
    }
}

export default Input