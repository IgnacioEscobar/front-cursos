import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import './App.css'
import ListaCursos from "./components/ListaCursos";
import ListaAlumnos from "./components/ListaAlumnos";
import NuevoCurso from "./components/NuevoCurso";
import Creado from "./components/Creado";
import ResourceNotFound from "./components/ResourceNotFound";
import {Switch} from "react-router";

class App extends Component {
  render() {
    return (
        <div>
          <Router>
              <div>
                  <nav>
                      <Link to={`/`}>Listado de cursos</Link>
                      <Link to={`/cursos/nuevo`}>Nuevo curso</Link>
                  </nav>
                  <div class="content">
                      <Switch>
                          <Route exact path="/" component={ListaCursos} />
                          <Route exact path="/cursos/:id/alumnos" component={ListaAlumnos} />
                          <Route exact path="/cursos/nuevo" component={NuevoCurso} />
                          <Route exact path="/cursos/creado" component={Creado} />
                          <Route exact component={ResourceNotFound} />
                      </Switch>
                  </div>
              </div>
          </Router>
        </div>
    );
  }
}

export default App;
