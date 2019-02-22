import React, {Component} from 'react'

class Alumno extends Component{
    render() {
        return (
            <div class="grid-item">
                <h2>{this.props.contents.apellido}, {this.props.contents.nombre}</h2>
                <p>DNI: {this.props.contents.dni}</p>
                {this.props.contents.nota && <p>Nota: {this.props.contents.nota}</p>}
            </div>
        );
    }
}

export default Alumno