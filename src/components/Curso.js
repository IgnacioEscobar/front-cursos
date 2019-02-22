import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './grid.css';

class Curso extends Component {
    render(){
        return(
            <div class="grid-item">
                <h2>{this.props.contents.tema}</h2>
                <p>{this.props.contents.duracion} clases</p>
                <p>Año {this.props.contents.anno}</p>
                <Link to={`/cursos/${this.props.contents._id}/alumnos`}>Alumnos</Link>
            </div>
        );
    }
}

export default Curso
