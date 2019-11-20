import React, { Component } from "react";

class Presupuesto extends Component {
  render() {
    return (
      <div className="alert alert-info" role="alert">
        <h3>Presupuesto: ${this.props.presupuesto}</h3>
      </div>
    );
  }
}

export default Presupuesto;
