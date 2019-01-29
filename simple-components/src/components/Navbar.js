import React, { Component } from 'react';


class Navbar extends Component {

    // pesquisar sobre a necessidade de um construtor - aqui não precisa
    // pesquisar sobre a relação entre os props passados e a renderização dos mesmos
    constructor(props, name, ...labels){
        super(props);
        this.props = {
            menuLabels: labels,
            name: name.toString() 
        }
    }

    render(){
        return (
            <header>
                <h1>{this.props.name}</h1>
                <nav>
                    <ul>
                        { this.props.menuLabels.map(i => {return <li>{i}</li>}) }
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Navbar;