import React, {Component} from 'react';
// import './Login.css';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Paginacao from '../Paginacao/Paginacao'
import ListaColaboradores from "./Lista/ListaColaboradores";
import api from "../../services/api";
import {faPlus, faSearch, faUsers} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Logout from "../Login/Logout";

const searchTypes = [
    { name: 'Nome'},
    { name: 'Cargo'},
    { name: 'Competência'},
    { name: 'Time'},
];

const default_item_amount = 6;

class Colaboradores extends Component {

    state = {
        colaboradores: [],
        current_page: 1,
        showmore_show: true,
        size: default_item_amount,
        show_size: 1,
        searchType_holder: 'Nome',
        search_holder: '',
        searchType: 'Nome',
        search: '',
    };

    async componentDidMount() {
        let response = await api.get('/colaborador/list',
            {params: {page: this.state.pages_count, size: default_item_amount}});

        this.setState({colaboradores: response.data.content});
        this.setState({pages_amount: response.data.totalPages});
        this.setState({size: response.data.size});
        if(this.state.current_page === this.state.pages_amount) {
            this.setState({showmore_show: false});
        } else if(response.data.totalElements >= default_item_amount) {
            this.setState({showmore_show: true});
        }
    }

    constructor(props) {
        super(props);
        this.handlePagination = this.handlePagination.bind(this);
        this.handleSearchType = this.handleSearchType.bind(this);
        this.doSearch = this.doSearch.bind(this);
        this.handleSearchText = this.handleSearchText.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    async handlePagination(pageNum) {
        let response = await api.get('/colaborador/find',
            {params: {
                    name: this.state.search_holder,
                    searchType: this.state.searchType_holder,
                    page: pageNum - 1,
                    size: (default_item_amount * (this.state.show_size))
                }
            });
        this.setState({current_page: pageNum});
        this.setState({size: response.data.size});
        this.setState({pages_amount: response.data.totalPages});

        if(this.state.current_page === this.state.pages_amount) {
            this.setState({showmore_show: false});
        } else if(response.data.totalElements >= default_item_amount) {
            this.setState({showmore_show: true});
        }

        this.setState({colaboradores: response.data.content});
    }

    handleSearchType(type) {
        this.setState({searchType: type});
    }

    async doSearch() {
        let response = await api.get('/colaborador/find',
            {params: {
                    name: this.state.search,
                    searchType: this.state.searchType,
                    page: 0,
                    size: default_item_amount
                }
            });

        this.setState({searchType_holder: this.state.searchType});
        this.setState({search_holder: this.state.search});
        this.setState({current_page: 1});
        this.setState({size: response.data.size});
        this.setState({show_size: 1});
        this.setState({pages_amount: response.data.totalPages});

        if(this.state.current_page === this.state.pages_amount) {
            this.setState({showmore_show: false});
        } else if(response.data.totalElements >= default_item_amount) {
            this.setState({showmore_show: true});
        }

        this.setState({colaboradores: response.data.content});
    }

    handleSearchText(event) {
        this.setState({ search: event.target.value });
    }

    async showMore() {
        const last_page = Math.ceil(((
            default_item_amount * (this.state.show_size + 1)) / this.state.show_size) / default_item_amount
        );
        const current_page = this.state.current_page > last_page ? last_page : this.state.current_page;
        let response = await api.get('/colaborador/find',
            {params: {
                        name: this.state.search_holder,
                        searchType: this.state.searchType_holder,
                        page: current_page - 1,
                        size: (default_item_amount * (this.state.show_size + 1))
                    }
            });
        this.setState({current_page: current_page});
        this.setState({pages_amount: response.data.totalPages});
        this.setState({size: response.data.size});
        if(this.state.current_page === this.state.pages_amount) {
            this.setState({showmore_show: false});
        } else if(response.data.totalElements >= default_item_amount) {
            this.setState({showmore_show: true});
        }
        this.setState({show_size: this.state.show_size += 1});
        this.setState({colaboradores: response.data.content});
    }

    async handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.doSearch();
        }
    }

    render() {
        return (
            <Container>
                <Jumbotron>
                    <Logout />
                    <Row>
                        <Col>
                            <h1 style={{ marginBottom: '2rem' }}><FontAwesomeIcon icon={faUsers}/> Colaboradores</h1>
                        </Col>
                    </Row>
                    <Row >
                        <Col>
                            <InputGroup className="mb-1">
                                <FormControl
                                    placeholder="Nome, Cargo, Competência ou Time"
                                    aria-label="Nome, Cargo, Competência ou Time"
                                    aria-describedby="basic-addon2"
                                    onChange={this.handleSearchText}
                                    onKeyDown={this.handleKeyDown}
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary" onClick={(e) => this.doSearch()}><FontAwesomeIcon icon={faSearch}/> Buscar</Button>
                                </InputGroup.Append>
                            </InputGroup>
                            <ButtonGroup toggle>
                                {searchTypes.map((searchType, idx) => (
                                <ToggleButton
                                    key={idx}
                                    type="radio"
                                    variant="info"
                                    name="radio"
                                    value={searchType.name}
                                    checked={this.state.searchType === searchType.name}
                                    onChange={(e) => this.handleSearchType(e.currentTarget.value)}
                                >
                                    {searchType.name}
                                </ToggleButton>
                                ))}
                            </ButtonGroup>
                        </Col>
                        <Col>
                            <Link to="/editor">
                                <Button variant="primary"><FontAwesomeIcon icon={faPlus} /> Novo</Button>{' '}
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ListaColaboradores colaboradores={this.state.colaboradores} />
                        </Col>
                    </Row>
                    {this.state.showmore_show === true ?
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
                                       current_page={this.state.current_page}
                                       pages_amount={this.state.pages_amount}/>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        );
    }
}

export default Colaboradores;
