import React, {Component} from 'react'

class AgregarAlumno extends Component{
    constructor(props){
        super(props);
        this.state = {
            apellido : "",
            nombre : "",
            dni: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.agregarAlumno = this.agregarAlumno.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    agregarAlumno(event){
        this.props.handler(this.state);
        this.setState({
            apellido : "",
            nombre : "",
            dni: ""
        });
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.agregarAlumno}>
                    <label>
                        Nombre:
                        <input type="text" name="nombre" value={this.state.nombre} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        Apellido:
                        <input type="text" name="apellido" value={this.state.apellido} onChange={this.handleChange} required/>
                    </label>
                    <label>
                        DNI:
                        <input type="text" name="dni" value={this.state.dni} onChange={this.handleChange} required/>
                    </label>
                    <input type="submit" value="Agregar alumno" class="submit"/>
                </form>
            </div>
        );
    }
}

export default AgregarAlumno