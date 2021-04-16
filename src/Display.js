import React from 'react'

class Display extends React.Component{
    render(){
        return(
            <div id='display'>
                <p>Formula: {this.props.expression}</p>
                <p>Risultato: {this.props.result}</p>
                <p>{this.props.errore}</p>
            </div>
        )
    }
}

export default Display