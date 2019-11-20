import React, { Component } from "react";

class Restante extends Component {
  render() {
    return (
      <div>
        <div className="alert alert-success" role="alert">
          <h3>Restante: ${this.props.restante}</h3>
        </div>
      </div>
    );
  }
}

export default Restante;
