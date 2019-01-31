import React, { Component } from 'react';

// com export default direto, pra ficar mais organizadinho
export default class Header extends Component {

    // props recebe os parâmetros na tag, daquele jeitinho lá
    // não mexi no state por enquanto, não é preciso
    constructor(props, name){
        super(props);
        this.props = {name: name.toString()}
    }

    render(){
        return(
            <header>
                <h1>{this.props.name}</h1>
            </header>
        )
    }
}