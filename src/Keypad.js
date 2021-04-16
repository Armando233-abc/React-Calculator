import Button from './Button'
import React from 'react'
import './Keypad.css'

class Keypad extends React.Component{
    render(){
        return(
            <div id='keypad'>
                <Button value='0' add={this.props.add}/>
                <Button value='1' add={this.props.add} />
                <Button value='2' add={this.props.add}/>
                <Button value='3' add={this.props.add}/>
                <Button value='4' add={this.props.add}/>

                <Button value='5' add={this.props.add}/>
                <Button value='6' add={this.props.add}/> 
                <Button value='7' add={this.props.add}/> 
                <Button value='8' add={this.props.add}/>
                <Button value='9' add={this.props.add}/>


                <Button value='+' add={this.props.add}/>
                <Button value='-' add={this.props.add}/>
                <Button value='*' add={this.props.add}/>
                <Button value='/' add={this.props.add}/>

                <Button value='=' add={this.props.add}/>
                <Button value='CE' add={this.props.add}/>
                <Button value='C' add={this.props.add}/>
            </div>
        )
    
        
    }
}

export default Keypad