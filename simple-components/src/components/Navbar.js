import React, { Component } from 'react';

export default class Navbar extends Component {

    // só é preciso ter um construtor quando se mexe com estados ou quando faz binding de métodos
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
                        { this.props.menuLabels.map(i => {return <li><a href="#">{i}</a></li>}) }
                    </ul>
                </nav>
            </header>
        );
    }
}