import React, {Component} from 'react'
import Curso from "./Curso";
import './grid.css'

class ListaCursos extends Component{
    constructor(props){
        super(props)
        this.state = {
            loading : true,
            cursos : {}
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/cursos",{
            headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.9kKTP8noR4tIDbdUEpkLHKnqGFxqAsWfIg-z4kSn5As"}
        })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    loading : false,
                    cursos : data
                })
            })
    }

    render() {
        return (
            <div>
                <h1>Lista de cursos</h1>
                <div class="grid-container">
                    {this.state.loading ? <p>Cargando..</p> : this.state.cursos.map( curso =>
                        <Curso key={curso._id} contents={curso}/>
                    )}
                </div>
            </div>

        );
    }
}

export default ListaCursos