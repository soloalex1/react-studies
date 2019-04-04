import React, { Component } from "react";

export default class Clock extends Component {

    constructor(props){
        super(props);
        this.state = { date: new Date() }
    }

    // exemplo sobre métodos de ciclo de vida

    // chamado após a montagem (construção) do componente
    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

    // chamado antes da desmontagem (destruição) do componente
    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        // não se altera o estado diretamente
        this.setState({
            date: new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>Hello world!</h1>
                <h2>It's {this.state.date.toLocaleString()}</h2>
            </div>
        );
    }
}