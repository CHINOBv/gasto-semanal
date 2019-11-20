import React, { Component } from "react";

import "./css/App.css";

import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import Listado from "./components/Listado.jsx";

import { validarPresupuesto } from "./helper.js";

class App extends Component {
  state = {
    presupuesto: "",
    restante: "",
    gastos: {}
  };

  componentDidMount() {
    this.ObtenerPresupuesto();
  }

  ObtenerPresupuesto() {
    let presupuesto = prompt("Cual es tu presupuesto");

    let resultado = validarPresupuesto(presupuesto);

    if (resultado) {
      const presupuesto = resultado;
      this.setState({
        presupuesto,
        restante: presupuesto
      });
    } else {
      this.ObtenerPresupuesto();
    }
  }

  Addgasto = gasto => {
    //copia del state
    const gastos = { ...this.state.gastos };

    gastos[`gasto${Date.now()}`] = gasto;

    this.restPres(gasto.Coste);

    this.setState({
      gastos
    });
  };

  restPres = cost =>{
    let restar = Number(cost)
    //copia del state
    let restante = this.state.restante
    //restar
    restante -= restar;
    //establecer state

    this.setState({
      restante
    });
    
  }

  render() {
    return (
      <div className="App">
        <Header title="Head" />
        <div className="contenido-principal contenido">
          <div className="row">
            <div className="col md-mx-auto">
              <Form Addgasto={this.Addgasto} />
            </div>
            <div className="col md-mx-auto">
              <Listado
                gastos={this.state.gastos}
                presupuesto={this.state.presupuesto}
                restante={this.state.restante}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
