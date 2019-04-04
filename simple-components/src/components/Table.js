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
                    // keys ajudam a identificar itens alterados/atualizados
                    // só fazem sentido no contexto do array (chama dentro do map que é sucesso)
                    // deve ser única no array, mas não precisa ser única globalmente
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