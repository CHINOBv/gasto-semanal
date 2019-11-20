import React, { Component } from "react";
//import PropTypes from "prop-types";

import Control from "./Control.jsx";

import Gasto from "./Gasto.jsx";

class Listado extends Component {
  render() {
    return (
      <div className="gastos-realizados">
        <h2>Listado</h2>
        {Object.keys(this.props.gastos).map(key => (
          <Gasto key={key} gasto={this.props.gastos[key]} />
        ))}
        <Control
          presupuesto={this.props.presupuesto}
          restante={this.props.restante}
        />
      </div>
    );
  }
}

//Listado.propTypes = {};

export default Listado;
