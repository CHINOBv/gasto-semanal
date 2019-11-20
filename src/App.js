import React,{Component} from 'react';

import './css/App.css';

import Header from './components/Header.jsx'
import Form from  './components/Form.jsx'
import Listado from  './components/Listado.jsx'

class App extends Component {
  
  state= {
    presupuesto:"",
    restante:"",
    gastos: {}
  }

  Addgasto = gasto =>{
    //copia del state
    const gastos = {...this.state.gastos};

    gastos[`gasto${Date.now()}`] = gasto;

    this.setState({
      gastos
    })
  }

  render() {
    return (
      <div className="App">
      <Header
      title="Head"/>
      <div className="contenido-principal contenido">
        <div className="row">
          <div className="col md-mx-auto">
            <Form
            Addgasto={this.Addgasto}/>
          </div>
          <div className="col md-mx-auto">
            <Listado
            gastos={this.state.gastos}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
