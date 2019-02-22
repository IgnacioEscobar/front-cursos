import React, {Component} from 'react'
import {Link} from "react-router-dom";
import './extra.css'

class ResourceNotFound extends Component{
    render(){
        return(
            <div class="extra">
                <h1>404</h1>
                <h2>Recurso no encontrado</h2>
                <Link to='/'>Ver listado </Link>
            </div>
        )
    }
}

export default ResourceNotFound