import React from "react";
import Display from "./Display";
import Keypad from "./Keypad";

class Calculator extends React.Component {
  constructor() {
    super();

    this.state = {
      espressione: "",
      risultato: "",
      errore : ''
    };
  }

  add = (value) => {

    switch (value){
        case '=':
            try{
                this.setState({
                    risultato: eval(this.state.espressione),
                    errore: ''
                });
            } catch {
                this.setState({
                    errore: 'Errore, impossibile risolvere questa espressione'
                })
            }
            
            break

        case 'CE':
            this.setState({
                espressione: '',
                risultato: '',
                errore: ''
            })
            break

        case 'C':
            this.setState({
                espressione: this.state.espressione.slice(0, -1)
            })
            break

        default:
            this.setState({
                espressione: this.state.espressione + value,
            })
            break

    }
  };

  render() {
    return (
      <div id="Calculator">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css"></link>        
        <Display 
            expression={this.state.espressione}
            result={this.state.risultato}
            errore={this.state.errore}>
        </Display>
        <Keypad add={this.add}></Keypad>
      </div>
    );
  }
}
export default Calculator;
