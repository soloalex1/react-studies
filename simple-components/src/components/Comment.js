// componente padrão para um comentário, como nos exemplos do reactjs.org

import React, { Component } from "react";

class Comment extends Component {

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
                <div className="comment-text">{this.props.text}</div>
                <div className="comment-date">{this.props.date}</div>
            </div>
        );
    }
}

export default Comment;