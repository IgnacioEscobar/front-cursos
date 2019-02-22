import React, {Component} from 'react'
import Alumno from "./Alumno";

class ListaAlumnos extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            alumnos : {}
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/cursos/${this.props.match.params.id}/alumnos`,{
            headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.9kKTP8noR4tIDbdUEpkLHKnqGFxqAsWfIg-z4kSn5As"}
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading : false,
                    alumnos : data
                });
            })
    }
    render() {
        return (
            <div>
                <h1>Alumnos del curso</h1>
                <div className="grid-container">
                    {this.state.loading ? <p>Cargando..</p> : this.state.alumnos.map( alumno =>
                        <Alumno key={alumno.dni} contents={alumno}/>
                    )}
                </div>
            </div>
        );
    }
}

export default ListaAlumnos