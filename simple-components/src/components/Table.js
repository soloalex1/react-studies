import React, { Component } from 'react';

export default class Table extends Component {

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((value, i) => 
                        <tr key={`${i}_${value}`}>
                            <td>{i}</td>
                            <td>{value}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}