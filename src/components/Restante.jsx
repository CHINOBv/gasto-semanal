import React, { Component } from "react";

import { revisarPresupuesto } from "../helper.js";

class Restante extends Component {
  render() {
    const presupuesto = this.props.presupuesto;
    const restante = this.props.restante;
    
    return (
      <div>
        <div className={revisarPresupuesto(presupuesto,restante)} role="alert">
          <h3>Restante: ${this.props.restante}</h3>
        </div>
      </div>
    );
  }
}

export default Restante;
