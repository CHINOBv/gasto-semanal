import React, { Component } from "react";
import PropTypes from "prop-types";

class Gasto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { Coste, Gast } = this.props.gasto;
    return (
      <li className="gastos">
        <p>
          {Gast}
          <span className="gasto">${Coste}</span>
        </p>
      </li>
    );
  }
}

Gasto.propTypes = {
  Gast: PropTypes.string,
  Coste: PropTypes.string
};
Gasto.defaultpropTypes = {
  Gast: "Error",
  Coste: "Error"
};

export default Gasto;
