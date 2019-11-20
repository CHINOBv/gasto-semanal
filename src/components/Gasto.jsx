import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Gasto extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const {Coste,Gast} = this.props.gasto
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
    NGast: PropTypes.string,
    Cost: PropTypes.string
};
Gasto.defaultpropTypes={
    NGast: "Error",
    Cost:"Error"
}

export default Gasto;