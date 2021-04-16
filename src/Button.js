import React from 'react'
import './Button.css'

class Button extends React.Component{

    render(){
        return(
          <button onClick={(e) => this.props.add(this.props.value)}>{this.props.value}</button>  
        )
    }
}

export default Button
