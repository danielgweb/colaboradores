import React, {Component} from 'react';
// import './Login.css';
import CardDeck from "react-bootstrap/CardDeck";
import _ from "lodash";
import {connect} from "react-redux";
import Colaborador from "../Colaborador/Colaborador"


class ListaColaboradores extends Component {

    render() {
        const { colaboradores } = this.props;
        if(!colaboradores) {
            return null;
        }
        const chunked = _.chunk(colaboradores, 3);

        return (
            chunked.map((colaboradores, index) => (
                    <CardDeck key={index} style={{ marginTop: '1rem' }}>
                        {colaboradores.map((colaborador, index) => (
                            <Colaborador key={index} colaborador={colaborador} />
                        ))}
                    </CardDeck>
                ))
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {colaboradores: ownProps.colaboradores};

};

export default connect(mapStateToProps) (ListaColaboradores);
