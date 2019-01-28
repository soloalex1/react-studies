import React, { Component } from 'react';

class Header extends Component {

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

export default Header;