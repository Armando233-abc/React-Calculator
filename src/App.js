import './App.css';
import React, { useState } from 'react'
import { Button } from '@material-ui/core';


class App extends React.Component{
  constructor(){
    super()

    this.state={
      expression : ''
    }
  }

  render(){
    return(
      <div id='main'>
        <form id='number'>
          <Button variant="contained" color="primary">0</Button>
          <Button variant="contained" color="primary">1</Button>
          <Button variant="contained" color="primary">2</Button>
          <Button variant="contained" color="primary">3</Button>
          <Button variant="contained" color="primary">4</Button>
          <Button variant="contained" color="primary">5</Button>
          <Button variant="contained" color="primary">6</Button>
          <Button variant="contained" color="primary">7</Button>
          <Button variant="contained" color="primary">8</Button>
          <Button variant="contained" color="primary">9</Button>
        </form>

        <form id='operazioni'>
          <Button variant="contained" color="primary">+</Button>
          <Button variant="contained" color="primary">-</Button>
          <Button variant="contained" color="primary">*</Button>
          <Button variant="contained" color="primary">/</Button>
        </form>
      </div>
    )
  }
}

export default App;
