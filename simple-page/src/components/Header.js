import React, { Component } from "react";

export default class Header extends Component{

    render(){
        return (
            <header>
                <h1 id="main-name">{ this.props.name }</h1>
                <nav id="header-nav">
                   <ul>
                       { this.props.menuLabels.map(i => {return <li><a href={i.link}>{i.label}</a></li>}) }
                   </ul>
                </nav>
            </header>
        )
    }
}