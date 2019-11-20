import React, { Component } from "react";
//import PropTypes from "prop-types";

class Form extends Component {
  NGast = React.createRef();
  Cost = React.createRef();

  CrGasto = e => {
    e.preventDefault();

    const gasto = {
      Gast: this.NGast.current.value,
      Coste: this.Cost.current.value
    };

    //console.log(gasto);
    //Enviando datos
    this.props.Addgasto(gasto);
  };

  render() {
    return (
      <form onSubmit={this.CrGasto}>
        <h2>Agrega tus gastos aqui</h2>
        <div className="campo">
          <label>Nombre Gasto</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. Transporte"
            ref={this.NGast}
          />
        </div>

        <div className="campo">
          <label>Cantidad</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="Ej. 300"
            ref={this.Cost}
          />
        </div>
        <input
          className="button-primary u-full-width"
          type="submit"
          value="Agregar"
        />
      </form>
    );
  }
}

//Form.propTypes = {};

export default Form;
