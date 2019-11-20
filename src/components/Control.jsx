import React, { Component } from "react";

import Presupuesto from "./Presupuesto.jsx";
import Restante from "./Restante.jsx";

class Control extends Component {
  render() {
    return (
      <>
        <Presupuesto presupuesto={this.props.presupuesto} />
        <Restante restante={this.props.restante} />
      </>
    );
  }
}

export default Control;
