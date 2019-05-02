// componente padrão para um comentário, como nos exemplos do reactjs.org

import React, { Component } from "react";
import PropTypes from 'prop-types';

const PropTypes = PropTypes;


export default class Comment extends Component {

    constructor(props, author, text, date){
        super(props);
        this.props = {
            author: {
                name: author.name,
                avatarUrl: author.avatarUrl
            },
            text: text,
            date: date
        }
    }

    render(){
        return (
            <div className="comment">
                <div className="user-info">
                    <img className="avatar" src={this.props.author.avatarUrl} alt={this.props.author.name}/>
                    <span className="userinfo-name"> {this.props.author.name}</span>
                </div>
                <div class="comment-content">
                    <span className="comment-text">{this.props.text}</span>
                    <span className="comment-date">{this.props.date}</span>
                </div>
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
    date: PropTypes.date.isRequired
}

// propriedades default

Comment.defaultProps = {
    author: {
        name: "Anônimo",
        avatarUrl: "https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-15-512.png"
    },
    text: "blablabla",
    date: new Date()
}