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
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Paginacao from '../Paginacao/Paginacao'
import ListaColaboradores from "./Lista/ListaColaboradores";
import api from "../../services/api";
import { faSearch, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const tipos_busca = [
    { name: 'Nome'},
    { name: 'Cargo'},
    { name: 'Competência'},
    { name: 'Time'},
];

class Colaboradores extends Component {

    state = {
        colaboradores: [],
        ultima_pagina: 0,
        size: 6,
        tipo_busca: 'Nome',
        pagina_atual: 0,
        vermais_show: true
    };

    async componentDidMount() {
        let response = await api.get('/colaborador/list');
        this.setState({colaboradores: response.data.content});
        this.setState({ultima_pagina: response.data.totalPages});
        this.setState({size: response.data.size});
    }

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    async handlePagination(pageNum) {
        let response = await api.get('/colaborador/list', {params: {page: pageNum, size: this.state.size}});
        this.setState({colaboradores: response.data.content});
        this.setState({pagina_atual: pageNum});
        this.setState({ultima_pagina: response.data.totalPages});
    }

    handleSearch(type) {
        this.setState({tipo_busca: type});
    }

    async showMore() {
        this.setState({size: this.state.size += 6});
        let response = await api.get('/colaborador/list', {params: {page: this.state.pagina_atual, size: this.state.size}});
        this.setState({ultima_pagina: response.data.totalPages});
        this.setState({colaboradores: response.data.content});
        if(this.state.size >= response.data.totalElements) {
            this.setState({vermais_show: false});
        } else {
            this.setState({vermais_show: true});
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1 style={{ marginBottom: '2rem' }}><FontAwesomeIcon icon={faUsers}/> Colaboradores</h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <Form>
                                <InputGroup className="mb-1">
                                    <FormControl
                                        placeholder="Nome, Cargo, Competência ou Time"
                                        aria-label="Nome, Cargo, Competência ou Time"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"><FontAwesomeIcon icon={faSearch}/> Buscar</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                <ButtonGroup toggle>
                                    {tipos_busca.map((tipo_busca, idx) => (
                                    <ToggleButton
                                        key={idx}
                                        type="radio"
                                        variant="info"
                                        name="radio"
                                        value={tipo_busca.name}
                                        checked={this.state.tipo_busca === tipo_busca.name}
                                        onChange={(e) => this.handleSearch(e.currentTarget.value)}
                                    >
                                        {tipo_busca.name}
                                    </ToggleButton>
                                    ))}
                                </ButtonGroup>
                            </Form>
                        </Col>
                        <Col><Button variant="primary"><FontAwesomeIcon icon={faPlus} /> Novo</Button>{' '}</Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListaColaboradores colaboradores={this.state.colaboradores} />
                        </Col>
                    </Row>
                    {this.state.vermais_show === true ?
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Button variant="primary" size="lg" style={{ margin: '2rem'}} onClick={(e) => this.showMore()} >
                                Ver mais...
                            </Button>
                        </Col>
                    </Row>
                        : null}
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
