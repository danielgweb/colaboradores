import React, {Component} from 'react';
// import './Login.css';
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
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
                    <CardDeck>
                        {colaboradores.map(colaborador => (
                            <Colaborador colaborador={colaborador} />
                        ))}
                    </CardDeck>
                ))
        );
    }
}

const mapStateToProps = (state, ownProps) => {

    return {colaboradores: [
            {nome: "Daniel Garcia 1", cargo: "Desenvolvedor", competencias: ["JavaEE","ReactJS","React Native","Python"], time: "Chapter Back-end"},
            {nome: "Daniel Garcia 2", cargo: "Desenvolvedor", competencias: ["JavaEE","ReactJS","React Native","Python"], time: "Chapter Front-end"},
            {nome: "Daniel Garcia 3", cargo: "Desenvolvedor", competencias: ["JavaEE","ReactJS","React Native","Python"], time: "Chapter Front-end"},
            {nome: "João das Neves 1", cargo: "Analista", competencias: ["Scrum"], time: "Analise de Requisitos"},
            {nome: "João das Neves 2", cargo: "Analista", competencias: ["Scrum"], time: "Analise de Requisitos"},
            {nome: "João das Neves 3", cargo: "Analista", competencias: ["Scrum"], time: "Analise de Requisitos"},
        ]};

};

export default connect(mapStateToProps) (ListaColaboradores);
