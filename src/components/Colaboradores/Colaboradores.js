import React, {Component} from 'react';
// import './Login.css';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Paginacao from '../Paginacao/Paginacao'
import ListaColaboradores from "./Lista/ListaColaboradores";
import api from "../../services/api";

class Colaboradores extends Component {

    state = {
        colaboradores: [],
        ultima_pagina: 0,
        size: 0
    };


    async componentDidMount() {
        let response = await api.get('/colaborador/list');
        this.setState({colaboradores: response.data.content});
        this.setState({ultima_pagina: Math.ceil(response.data.totalElements/response.data.size)});
        this.setState({size: response.data.size});
    }

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);
    }

    async handlePagination(pageNum) {
        let response = await api.get('/colaborador/list', {params: {page: pageNum, size: this.state.size}});
        this.setState({colaboradores: response.data.content});
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <h1>Colaboradores</h1>
                    <Button variant="primary">+ Novo</Button>{' '}
                    <Form>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nome, Cargo, Competência ou Time"
                                aria-label="Nome, Cargo, Competência ou Time"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Buscar</Button>
                            </InputGroup.Append>
                        </InputGroup>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            label="Nome"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch2"
                            label="Cargo"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch3"
                            label="Competência"
                            inline
                        />
                        <Form.Check
                            type="switch"
                            id="custom-switch4"
                            label="Time"
                            inline
                        />
                    </Form>

                    <ListaColaboradores colaboradores={this.state.colaboradores} />

                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Paginacao handler={this.handlePagination}
                                       ultima_pagina={this.state.ultima_pagina}
                                       size={this.state.size}/>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Colaboradores;
