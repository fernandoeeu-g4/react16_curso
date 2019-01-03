import React, { Component } from 'react'

class Ninjas extends Component {
    render() {
        let param = this.props
        return (
            <div className="ninja">
                <div>Nome: {param.nome}</div>
                <div>Idade: 19</div>
                <div>Cinto: Marrom</div>
            </div>
        )
    }
}

export default Ninjas