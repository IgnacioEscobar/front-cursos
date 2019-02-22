import React, {Component} from 'react'
import AgregarAlumno from "./AgregarAlumno";
import Alumno from "./Alumno";
import './NuevoCurso.css';
import './grid.css'
import {Redirect} from "react-router";

class NuevoCurso extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tema : "",
            duracion : "",
            anno: "",
            alumnos: [],
            redirect:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.agregarAlumno = this.agregarAlumno.bind(this);
        this.obtenerJSON = this.obtenerJSON.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        fetch(`http://localhost:3000/cursos`,{
            headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.9kKTP8noR4tIDbdUEpkLHKnqGFxqAsWfIg-z4kSn5As",
                'Content-Type': 'application/json'},
            method: 'post',
            body: this.obtenerJSON()
        }).then(res => {
            this.setState({
                redirect: true
            })
        });
        event.preventDefault();
    }

    agregarAlumno(alumno){
        this.setState(prevState => ({
            alumnos: [alumno, ...prevState.alumnos]
        }))
    }

    obtenerJSON(){
        const prop = 'redirect';

        const newState = Object.keys(this.state).reduce((object, key) => {
            if (key !== prop) {
                object[key] = this.state[key]
            }
            return object
        }, {})

        return JSON.stringify(newState)
    }

    render() {
        return (
            <div>
                <div class="formularios">
                    <h1>Nuevo curso</h1>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Tema:
                            <input type="text" name="tema" value={this.state.tema} onChange={this.handleChange} required/>
                        </label>
                        <label>
                            Duracion:
                            <input type="text" name="duracion" value={this.state.duracion} onChange={this.handleChange} required/>
                        </label>
                        <label>
                            Año:
                            <input type="text" name="anno" value={this.state.anno} onChange={this.handleChange} required/>
                        </label>
                        <input type="submit" value="Crear curso" class="submit" id="main-submit"/>
                    </form>
                    <h2>Agregar alumno</h2>
                    <AgregarAlumno handler={this.agregarAlumno}/>
                    {this.state.redirect && <Redirect to='/cursos/creado'/>}
                </div>
                <div class="alumnos">
                    <h1>Alumnos inscriptos</h1>
                    {this.state.alumnos.length===0 ? <span class="no-alumnos">No hay alumnos inscriptos, inscriba alumnos con el formulario "Agregar alumno"</span> :
                        <div className="grid-container">
                            {this.state.alumnos.map(alumno => <Alumno key={alumno.dni} contents={alumno}/>)}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default NuevoCurso