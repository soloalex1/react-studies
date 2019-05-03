// componente padrão para um comentário, como nos exemplos do reactjs.org

import React, { Component } from "react";
import PropTypes from 'prop-types';

export default class Comment extends Component {

    constructor(props){
        super(props);

        // não precisa disso, já tô passando direto do componente pai

        // this.props = {
        //     author: {
        //         name: author.name,
        //         avatarUrl: author.avatarUrl
        //     },
        //     text: text,
        //     date: date
        // }

        this.state = {
            data: [],
            count: 0
        }

        this.atualizaState = this.atualizaState.bind(this);
    }

    atualizaState(){
        let contador = this.state.count;
        contador++;
        let arrayText = `Click - ${contador}`
        let auxArray = this.state.data;
        auxArray.push(arrayText);
        this.setState({data: auxArray, count: contador});
        console.log("state atualizado!");
        console.log(this.state.data);
    }

    render(){
        return (
            <div className="comment">
                {/* <div className="user-info">
                    <img className="avatar" src={this.props.author.avatarUrl} alt={this.props.author.name}/>
                    <span className="userinfo-name"> {this.props.author.name}</span>
                </div>
                <div className="comment-content">
                    <span className="comment-text">{this.props.text}</span>
                    <span className="comment-date">{this.props.date}</span>
                </div> */}


                {/* a função vai sem parênteses porque senão ele chama em loop infinito dentro do render */}
                <button onClick={this.atualizaState}>Clique aqui!</button>  
                <h4>Dados do state:</h4>

                {/* por algum motivo isso aqui não funciona, vou abrir uma issue e ver melhor amanhã */}
                <ul>
                    {this.state.data.map((i) => {
                        <li>{i}</li>
                    })}
                </ul>
            </div>
        );
    }
}

// validando props
Comment.propTypes = {
    author: PropTypes.exact({
        name: PropTypes.string.isRequired,
        avatarUrl: PropTypes.string.isRequired
    }).isRequired,
    text: PropTypes.string.isRequired,
    // nao tem date direto, melhor pegar pra string
    date: PropTypes.string.isRequired
}

// propriedades default

Comment.defaultProps = {
    author: {
        name: "Anônimo",
        avatarUrl: "https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-15-512.png"
    },
    text: "blablabla",
    date: new Date().toLocaleString()
}