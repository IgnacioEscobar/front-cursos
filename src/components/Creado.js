import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './extra.css'

class Creado extends Component{
    render(){
        return(
            <div class="extra">
                <h1>Curso creado</h1>
                <Link to='/'>Ver listado </Link>
            </div>
        )
    }
}

export default Creado